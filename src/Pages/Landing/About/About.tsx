import styles from "./about.module.less"
import {StackImg} from "../../../UI/svg/StackImg.tsx";
import {DisplayImg} from "../../../UI/svg/DisplayImg.tsx";
import { BoxImg } from "../../../UI/svg/BoxImg.tsx";
import cn from "classnames";

export function About() {
  return (
    <section id="about" className={styles.root}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>About Me</span>
          <h2 className={styles.sectionTitle}>
            Crafting Digital Solutions
          </h2>
        </div>

        <div className={styles.rootContent}>
          <div className={styles.rootText}>
            <p className={styles.rootLead}>
              Full-stack engineer with <strong>9+ years of experience</strong> in backend
              and web application development using Python, Django REST Framework, and React.
            </p>

            <p>
              I specialize in microservices architecture, database design, and AWS deployment.
              My passion lies in building robust, scalable systems that solve real-world problems.
            </p>

            <p>
              Throughout my career, I've successfully designed and deployed full-scale POS
              and telecommunication web systems, always focusing on clean code,
              performance optimization, and user experience.
            </p>

            <div className={styles.rootHighlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <StackImg />
                </div>
                <div className={styles.highlightContent}>
                  <h4>Architecture Design</h4>
                  <p>Designing scalable microservices and cloud-native solutions</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <DisplayImg />
                </div>
                <div className={styles.highlightContent}>
                  <h4>Full-stack Development</h4>
                  <p>End-to-end web application development from concept to deployment</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <BoxImg />
                </div>
                <div className={styles.highlightContent}>
                  <h4>Cloud & DevOps</h4>
                  <p>AWS infrastructure, Linux administration, and CI/CD pipelines</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rootImage}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.initials}>AR</span>
              </div>
              <div className={styles.imageDecoration}></div>
            </div>

            <div className={cn(styles.techFloat, styles.techPython)}>Python</div>
            <div className={cn(styles.techFloat, styles.techReact)}>React</div>
            <div className={cn(styles.techFloat, styles.techAWS)}>AWS</div>
            <div className={cn(styles.techFloat, styles.techPostgres)}>PostgreSQL</div>
            <div className={cn(styles.techFloat, styles.techFastApi)}>FastAPi</div>
            <div className={cn(styles.techFloat, styles.techDjango)}>Django</div>
          </div>
        </div>
      </div>
    </section>
  )
}
