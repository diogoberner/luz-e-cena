import { useMemo, useState } from "react";
import { Movie } from "../types";
import useDebounce from "./useDebounce";

const useFilterMovies = (
  movies: Movie[],
  getValue: (movie: Movie) => string
) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { debouncedTerm } = useDebounce(searchTerm, 500);

  const filteredMovies: Movie[] = useMemo(() => {
    if (!debouncedTerm.trim()) return movies;
    return movies.filter((movie) =>
      getValue(movie).toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }, [movies, debouncedTerm, getValue]);

  return { searchTerm, setSearchTerm, filteredMovies };
};

export default useFilterMovies;
