import { useEffect, useRef, useState } from "react";
import { BackButton } from "../components/BackButton";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovie } from "../api/fetchMovie";
import { MovieCard } from "../components/MovieCard";
import { AdditionalInformation } from "../components/AdditionalInformation";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const goBack = useRef(location.state ?? "/movies");
  useEffect(() => {
    const getMovieDetails = async (id) => {
      try {
        setError(false);
        setLoading(true);
        const { data } = await fetchMovie(id);
        setMovie(() => ({ ...data }));
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails(id);
  }, [id]);

  return (
    <div className="flex-column px-10 py-10">
      <BackButton goBack={goBack} />
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <>
          <MovieCard movie={movie} />

          <AdditionalInformation id={movie.id} />

          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
