import { useEffect, useState } from "react";
import { fetchTrend } from "../api/fetchTrend";
import { MoviesList } from "../components/MoviesList";
import { Heading } from "../components/Heading";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await fetchTrend();
        console.log(results);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, []);
  return (
    <div className="bg-orange-20 p-20">
      <Heading>Trending today</Heading>
      <MoviesList movies={movies} />
    </div>
  );
};
