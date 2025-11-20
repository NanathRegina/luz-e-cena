import styles from "../header.module.css"

const headerList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
    return (
    <ul className={styles.cabecalho}>{children}</ul>
    )
}

export default headerList
