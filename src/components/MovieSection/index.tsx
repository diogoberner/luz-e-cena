import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import MoviesList from "../MoviesList";
import { Movie } from "../../types";
import { useEffect, useState } from "react";
import { getMovies } from "../../api";

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (err) {
      console.error("Erro ao buscar filmes..." + err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.title}>Em cartaz</h1>
        <MoviesList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
