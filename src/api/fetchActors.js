import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTM3MzZmMGY3MjJiZDc0MDEzOWRhYzZiZjhkZDdmYSIsInN1YiI6IjY2M2RiZmQ5MzM0OWZiYTM0YTc5NTMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6gXG7JRpaSuBCbm1ugFtIfunjS_ZpQrmo1TXwtmR-g";

export const fetchActors = (id) => {
  const params = { language: "en-US" };
  const result = axios.get(`3/movie/${id}/credits`, { params });
  return result;
};
