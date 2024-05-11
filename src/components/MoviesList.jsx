import { Link } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  return (
    <ul className="menu menu-xs  w-56 rounded-box">
      {movies.map((movie, ind) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="text-slate-700 p-2">
              {ind + 1}. {movie.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
