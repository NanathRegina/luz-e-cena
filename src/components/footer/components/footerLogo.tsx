import Logo from '../../logo'
import styles from '../footer.module.css'

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src='/logo/logo_branco.png'></Logo>
        <p>Onde a realidade encontra a fantasia!</p>
    </div>
  )
}

export default FooterLogo