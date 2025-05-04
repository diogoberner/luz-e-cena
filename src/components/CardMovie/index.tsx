import { Movie } from "../../types";
import Tag from "../Tag";
import styles from "./CardMovie.module.css";

const CardMovie = (props: Movie) => {
  const { src, alt, title, genre, category, duration, rating } = props;
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <div className={styles.line1}>
            <p>{genre}</p>
            <Tag value={category} />
          </div>
          <div className={styles.line2}>
            <p>{`${duration} minutos`}</p>
            <Tag value={rating} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
