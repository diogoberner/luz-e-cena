import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";
import FooterInstitucional from "./FooterInstitucional";
import FooterLogo from "./FooterLogo";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <FooterLogo />
        <div className={styles.footer_info}>
          <FooterInfo />
          <FooterInstitucional />
          <FooterSocial />
        </div>
      </footer>
      <div className={styles.developed}>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </div>
    </>
  );
};

export default Footer;
