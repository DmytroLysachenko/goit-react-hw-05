export const MovieCard = ({ movie }) => {
  return (
    <div className=" bg-base-200 truncate rounded-3xl">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex-column">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">{movie.original_title}</h1>
            <p className="italic text-slate-400 text-wrap mb-10">
              {movie.tagline}
            </p>
            <p className="text-black-400 text-wrap">
              User Score: {Math.round(movie.vote_average * 10)}%
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-wrap font-bold mb-2">Overview:</h3>
            <p className="text-black-200 text-wrap">{movie.overview}</p>
          </div>
          <div>
            <h3 className="text-wrap font-bold mb-2">Genres:</h3>
            {/* <p className="text-black-200 text-wrap">{genres.join(", ")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
