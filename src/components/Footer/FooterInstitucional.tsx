import Link from "../Link";
import styles from "./Footer.module.css";

const FooterInstitucional = () => {
  return (
    <div className={styles.institutional}>
      <h4 className={styles.title}>Institucional</h4>
      <Link>
        <span className={styles.anchor}>Sobre nós</span>
      </Link>
      <Link>
        <span className={styles.anchor}>Para empresas</span>
      </Link>
      <Link>
        <span className={styles.anchor}>Club fidelidade</span>
      </Link>
    </div>
  );
};

export default FooterInstitucional;
