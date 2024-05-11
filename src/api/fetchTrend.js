import { data } from "autoprefixer";
import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTM3MzZmMGY3MjJiZDc0MDEzOWRhYzZiZjhkZDdmYSIsInN1YiI6IjY2M2RiZmQ5MzM0OWZiYTM0YTc5NTMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6gXG7JRpaSuBCbm1ugFtIfunjS_ZpQrmo1TXwtmR-g";
export const fetchTrend = () => {
  const result = axios.get("/3/trending/movie/day", {
    params: { language: "en-US" },
  });
  return result;
};
