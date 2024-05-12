import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar bg-base-100 bg-gradient-to-b from-red-300 via-red-200 to-orange-10 gap-16 flex p-5">
      <NavLink
        className="btn btn-ghost bg-orange-200 text-2xl border-solid border border-red-400 rounded-md"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="btn btn-ghost bg-orange-200 text-2xl border-solid border border-red-400 rounded-md"
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
