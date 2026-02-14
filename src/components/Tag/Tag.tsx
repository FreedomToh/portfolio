import styles from "./tag.module.less"

interface Props {
    name: string
}

export const Tag = ({name}: Props) => {
    return (
        <div className={styles.root}>{name}</div>
    )
}