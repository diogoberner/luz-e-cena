import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import MoviesList from "../MoviesList";
import useFetchMovies from "../../hooks/useFetchMovies";
import useFilterMovies from "../../hooks/useFilterMovies";

const MovieSection = () => {
  const { movies, isLoading, error } = useFetchMovies();
  const { searchTerm, setSearchTerm, filteredMovies } = useFilterMovies(
    movies,
    (movie) => movie.title
  );

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar filmes..."
          />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.title}>Em cartaz</h1>
        {isLoading && <p>Carregando...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MoviesList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
