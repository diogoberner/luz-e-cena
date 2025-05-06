import { useMemo, useState } from "react";
import { Movie } from "../types";

const useFilterMovies = (
  movies: Movie[],
  getValue: (movie: Movie) => string
) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredMovies: Movie[] = useMemo(() => {
    if (!searchTerm.trim()) return movies;
    return movies.filter((movie) =>
      getValue(movie).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [movies, searchTerm, getValue]);

  return { searchTerm, setSearchTerm, filteredMovies };
};

export default useFilterMovies;
