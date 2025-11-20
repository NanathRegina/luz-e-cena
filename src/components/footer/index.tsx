import FooterInfo from "./components/footerInfo";
import FooterLogo from "./components/footerLogo";
import styles from "./footer.module.css";
import FooterDevelopedBy from "./components/footerDevelopedBy";
import FooterInstitucional from "./components/footerInstitucional";
import FooterSocial from "./components/footerSocial";

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
          <FooterInstitucional />
          <FooterSocial />
        </div>
      </footer>
      <FooterDevelopedBy />
    </>
  );
};

export default Footer;
