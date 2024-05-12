import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api/fetchReviews";
import { ReviewsList } from "./ReviewsList";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getReviews = async (id) => {
      try {
        const { data } = await fetchReviews(id);
        setReviews(() => [...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews(id);
  }, [id]);
  return (
    <>
      {reviews.length > 0 && <ReviewsList reviews={reviews} />}
      {!reviews.length && "No reviews"}
    </>
  );
};
export default MovieReviews;
