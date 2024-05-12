import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const BackButton = ({ goBack }) => {
  return (
    <Link className="btn mb-10" to={goBack.current}>
      <IoMdArrowRoundBack />
      Back
    </Link>
  );
};
