import { Link } from "react-router-dom";

import posterNotAvailable from '../assets/posterNotAvailable.jpg';
const MovieCard = (props) => {
  const {movie,title,overview,poster}=props;
  
  return (
    <Link to={`/movie/${movie.id}`}>
    <div className="max-w-xs md:mx-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={poster===null?posterNotAvailable:`https://image.tmdb.org/t/p/w500${poster}`} alt={`${title} poster`} loading="lazy"/>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
      </div>
    </div>
    </Link>
  )
}

export default MovieCard