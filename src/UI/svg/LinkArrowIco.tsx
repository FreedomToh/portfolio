interface LinkArrowIcoProps {
    styles: string;
}

export const LinkArrowIco = ({ styles }: LinkArrowIcoProps) => {
    return (
        <svg className={styles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    )
}