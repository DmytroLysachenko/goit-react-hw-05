import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { Movies } from "../pages/Movies";
import { NotFound } from "../pages/NotFound";
import { Navigation } from "./Navigation";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
