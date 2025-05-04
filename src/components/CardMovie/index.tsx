import Tag, { Category, Censorship } from "../Tag";
import styles from "./CardMovie.module.css";

interface CardMovieProps {
  src: string;
  alt: string;
  title: string;
  genre: string;
  category: Category;
  duration: number;
  censorship: Censorship;
}

const CardMovie = (props: CardMovieProps) => {
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
