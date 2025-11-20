import styles from "../header.module.css"

const headerListItem = ({children}: React.HTMLAttributes<HTMLLIElement>) => {
    return (
    <li className = {styles.cabecalho}>{children}</li>
    )
}

export default headerListItem
