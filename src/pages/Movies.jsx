import { fetchMovies } from "../api/fetchMovies";
import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { MovieSearch } from "../components/MovieSearch";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const findMovies = async () => {
      try {
        setQuery(searchParams.get("query"));
        setError(false);
        setLoading(true);
        const {
          data: { results },
        } = await fetchMovies(query);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    findMovies();
  }, [query, searchParams]);
  const handleSubmit = (values) => {
    setSearchParams({ query: values.query });
    setQuery(values.query);
  };
  return (
    <div className="px-10 py-20">
      <MovieSearch handleSubmit={handleSubmit} />
      {error && <Error />}
      {loading && <Loader />}
      {movies.length > 0 && !loading && !error && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Movies;
