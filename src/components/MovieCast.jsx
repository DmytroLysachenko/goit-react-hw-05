import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchActors } from "../api/fetchActors";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getCredits = async (id) => {
      try {
        const { data } = await fetchActors(id);
        setCast(() => [...data.cast]);
      } catch (error) {
        console.log(error);
      }
    };
    getCredits(id);
  }, [id]);
  return (
    <ul className="flex-col">
      {cast.map((x) => (
        <li
          key={x.id}
          className="flex mb-5 gap-10 bg-blue-50 rounded-xl truncate border-solid border-2 border-black-200 p-10"
        >
          <img
            width="200px"
            src={"https://image.tmdb.org/t/p/w500" + x.profile_path}
            alt="x.id"
          />
          <div className="flex-col ">
            <h3 className="text-2xl mb-10">Full Name: {x.name}</h3>
            <p className="text-lg">Character: {x.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default MovieCast;
