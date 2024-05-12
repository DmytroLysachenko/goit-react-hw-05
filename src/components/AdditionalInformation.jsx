import { Link } from "react-router-dom";

export const AdditionalInformation = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
      <h3 className="text-wrap font-bold mb-2 text-2xl">
        Additional information:
      </h3>
      <ul className="menu menu-xs rounded-box">
        <li>
          <Link to={`cast`} className="text-slate-700 p-2">
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} className="text-slate-700 p-2">
            Reviews
          </Link>
        </li>
      </ul>
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
    </>
  );
};
