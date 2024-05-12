import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5690912/pexels-photo-5690912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">404 Not found</h1>
          <p className="mb-5">This page was not found.</p>
          <Link to="/" className="btn">
            Back on home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
