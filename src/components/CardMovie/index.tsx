import { Movie } from "../../types";
import Tag from "../Tag";
import styles from "./CardMovie.module.css";

const CardMovie = (props: Movie) => {
  const { src, alt, title, genre, category, duration, censorship } = props;
  return (
    <li>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <div className={styles.line1}>
            <p>{genre}</p>
            <Tag value={category} />
          </div>
          <div className={styles.line2}>
            <p>{duration}</p>
            <Tag value={censorship} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
