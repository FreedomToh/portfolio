import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectsCommand} from "@aws-sdk/client-s3";
import {CloudFrontClient, CreateInvalidationCommand} from "@aws-sdk/client-cloudfront";
import mime from "mime";
import {execSync} from "child_process";
import 'dotenv/config';
import dotenv from "dotenv";

const modeArg = process.argv.find(arg => arg.startsWith("--mode="));
const mode = modeArg ? modeArg.split("=")[1] : "development";

// по аналогии с vite: ищем .env.production, иначе .env
const envFile = path.resolve(process.cwd(), `.env.${mode}`);

dotenv.config({ path: envFile });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==== Config via ENV ====
const REGION = process.env.AWS_REGION || "ap-northeast-1";
const BUCKET = process.env.S3_BUCKET;                   // required
const DIST_ID = process.env.CF_DISTRIBUTION_ID;         // required
const SECRET_ID = process.env.AWS_ACCESS_KEY_ID;         // required
const SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY;         // required
const BUILD_DIR = process.env.BUILD_DIR || "dist";
const DRY_RUN = (process.env.DRY_RUN || "false").toLowerCase() === "true";

// Какие файлы НЕ кешируем
const NO_CACHE_FILES = new Set(["index.html", "manifest.webmanifest", "sw.js"]);

// Что инвалидировать после деплоя (проверим наличие части путей динамически)
const DEFAULT_INVALIDATION_PATHS = ["/", "/index.html"];

// ===== Helpers =====
function log(...args) {
    console.log("[deploy]", ...args);
}

function err(...args) {
    console.error("[deploy:error]", ...args);
}

function resolveContentType(key) {
    // Спец-кейсы, которые S3 иногда определяет неверно
    if (key.endsWith(".webmanifest") || key.endsWith("manifest.webmanifest")) {
        return "application/manifest+json";
    }
    // Манифест Vite PWA может быть .json
    if (key.endsWith(".json") && path.basename(key) === "manifest.json") {
        return "application/manifest+json";
    }
    return mime.getType(key) || "application/octet-stream";
}

function isNoCacheKey(key) {
    const base = path.basename(key);
    return NO_CACHE_FILES.has(base);
}

function cacheControlForKey(key) {
    if (isNoCacheKey(key)) {
        return "no-cache, no-store, must-revalidate";
    }
    // всё остальное (хэшированные ассеты) — «вечный» кеш
    return "public, max-age=31536000, immutable";
}

async function walkDir(dir) {
    const res = [];

    async function walk(cur) {
        const entries = await fs.promises.readdir(cur, {withFileTypes: true});
        for (const e of entries) {
            const full = path.join(cur, e.name);
            if (e.isDirectory()) {
                await walk(full);
            } else {
                res.push(full);
            }
        }
    }

    await walk(dir);
    return res;
}

function toS3Key(absPath, baseDir) {
    return absPath.replace(baseDir + path.sep, "").replaceAll(path.sep, "/");
}

async function listAllS3Keys(s3, bucket) {
    const keys = [];
    let ContinuationToken = undefined;
    do {
        const out = await s3.send(new ListObjectsV2Command({Bucket: bucket, ContinuationToken}));
        for (const o of out.Contents ?? []) {
            if (o.Key) keys.push(o.Key);
        }
        ContinuationToken = out.IsTruncated ? out.NextContinuationToken : undefined;
    } while (ContinuationToken);
    return keys;
}

async function putObject(s3, bucket, key, body, contentType, cacheControl) {
    if (DRY_RUN) {
        log(`DRY-RUN put s3://${bucket}/${key} [${contentType}] [${cacheControl}] size=${body.length}`);
        return;
    }
    await s3.send(new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
        CacheControl: cacheControl,
    }));
}

async function deleteKeys(s3, bucket, keys) {
    if (!keys.length) return;
    if (DRY_RUN) {
        log(`DRY-RUN delete ${keys.length} objects`);
        return;
    }
    // батчами по 1000
    for (let i = 0; i < keys.length; i += 1000) {
        const chunk = keys.slice(i, i + 1000).map(Key => ({Key}));
        await s3.send(new DeleteObjectsCommand({
            Bucket: bucket,
            Delete: {Objects: chunk, Quiet: true}
        }));
    }
}

async function invalidate(cf, distId, paths) {
    const unique = Array.from(new Set(paths));
    if (!unique.length) return;
    if (DRY_RUN) {
        log(`DRY-RUN invalidate ${unique.join(", ")}`);
        return;
    }
    const callerRef = `deploy-${Date.now()}`;
    await cf.send(new CreateInvalidationCommand({
        DistributionId: distId,
        InvalidationBatch: {
            CallerReference: callerRef,
            Paths: {
                Quantity: unique.length,
                Items: unique,
            },
        },
    }));
    log("CloudFront invalidation created:", unique);
}

// ===== Main =====
async function main() {
    if (!BUCKET || !DIST_ID || !SECRET_ID || !SECRET_KEY) {
        err("S3_BUCKET and CF_DISTRIBUTION_ID and SECRET_ID and SECRET_KEY are required env vars.");
        process.exit(1);
    }

    const credentials = {
        accessKeyId: SECRET_ID,
        secretAccessKey: SECRET_KEY,
    };

    const s3 = new S3Client({region: REGION, credentials});
    const cf = new CloudFrontClient({region: "us-east-1", credentials}); // CloudFront API регион всегда us-east-1

    const absBuild = path.isAbsolute(BUILD_DIR) ? BUILD_DIR : path.join(__dirname, BUILD_DIR);

    execSync(`vite build --mode staging`, { stdio: 'inherit' })

    // 1) Собираем локальные файлы
    const localFiles = await walkDir(absBuild);
    if (!localFiles.length) {
        err(`No files in ${absBuild}`);
        process.exit(1);
    }

    // 2) Карта локальных ключей
    const localMap = new Map(); // key -> abs path
    for (const f of localFiles) {
        const key = toS3Key(f, absBuild);
        localMap.set(key, f);
    }

    // 3) Список файлов в бакете (чтобы удалить лишнее)
    log("Listing current S3 objects...");
    const remoteKeys = await listAllS3Keys(s3, BUCKET);

    // 4) Удаляем в S3 то, чего нет локально (кроме index.html/manifest/sw.js — если вдруг их временно нет)
    const protect = new Set(["index.html", "manifest.webmanifest", "sw.js"]);
    const toDelete = remoteKeys.filter((k) => !localMap.has(k) && !protect.has(path.basename(k)));
    if (toDelete.length) log("Will delete", toDelete.length, "stale objects");
    await deleteKeys(s3, BUCKET, toDelete);

    // 5) Загрузка ассетов (всё, кроме index.html/manifest/sw.js)
    const noCacheBase = Array.from(NO_CACHE_FILES); // список имён
    const uploadOrder = [
        // сначала ассеты (immutable)
        ...Array.from(localMap.keys()).filter(k => !noCacheBase.includes(path.basename(k))),
        // затем no-cache файлы (чтобы они оказались в бакете последними)
        ...Array.from(localMap.keys()).filter(k => noCacheBase.includes(path.basename(k))),
    ];

    const existed = new Set(remoteKeys);
    const invalidationCandidates = new Set(DEFAULT_INVALIDATION_PATHS);

    for (const key of uploadOrder) {
        const abs = localMap.get(key);
        const contentType = resolveContentType(key);
        const cacheControl = cacheControlForKey(key);
        const body = await fs.promises.readFile(abs);

        await putObject(s3, BUCKET, key, body, contentType, cacheControl);
        const base = path.basename(key);

        if (base === "index.html") invalidationCandidates.add("/index.html");
        if (base === "manifest.webmanifest") invalidationCandidates.add("/manifest.webmanifest");
        if (base === "sw.js") invalidationCandidates.add("/sw.js");

        const action = existed.has(key) ? "updated" : "created";
        log(`${action}: s3://${BUCKET}/${key} [${cacheControl}]`);
    }

    invalidationCandidates.add("/*");

    // 6) Инвалидация CloudFront
    await invalidate(cf, DIST_ID, Array.from(invalidationCandidates));

    log("Done.");
}

main().catch((e) => {
    err(e?.stack || e?.message || e);
    process.exit(1);
});