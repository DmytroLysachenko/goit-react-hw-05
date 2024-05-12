import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="menu menu-xs rounded-box">
      {movies.map((movie, ind) => {
        return (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className="text-slate-700 p-2"
              state={location}
            >
              {ind + 1}. {movie.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
