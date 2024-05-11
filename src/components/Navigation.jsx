import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navbar bg-base-100 bg-gradient-to-b from-red-300 via-red-200 to-orange-10 flex gap-10 p-5">
      <NavLink
        className="btn btn-ghost bg-orange-200 text-2xl mx-10 border-solid border border-red-400 rounded-md"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="btn btn-ghost bg-orange-200 text-2xl mx-10 border-solid border border-red-400 rounded-md"
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  );
};
