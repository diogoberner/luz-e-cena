import { Movie } from "../../types";
import CardMovie from "../CardMovie";
import styles from "./MoviesList.module.css";

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map((movie) => {
        return <CardMovie key={movie.id} {...movie} />;
      })}
    </ul>
  );
};

export default MoviesList;
