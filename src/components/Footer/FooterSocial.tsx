import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "../Link";
import styles from "./Footer.module.css";
import { AiFillTikTok } from "react-icons/ai";

const FooterSocial = () => {
  return (
    <div className={styles.social}>
      <h4 className={styles.title}>Siga nossas redes</h4>
      <div className={styles.icons}>
        <Link>
          <FaWhatsapp className={styles.icon} />
        </Link>
        <Link>
          <FaInstagram className={styles.icon} />
        </Link>
        <Link>
          <AiFillTikTok className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial;
