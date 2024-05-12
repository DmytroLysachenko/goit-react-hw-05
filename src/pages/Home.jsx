import { useEffect, useState } from "react";
import { fetchTrend } from "../api/fetchTrend";
import { MoviesList } from "../components/MoviesList";
import { Heading } from "../components/Heading";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const {
          data: { results },
        } = await fetchTrend();
        setMovies(results);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className="bg-orange-20 p-20">
      <Heading>Trending today</Heading>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
