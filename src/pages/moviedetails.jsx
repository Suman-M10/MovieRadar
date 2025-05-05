import { useParams, Link } from "react-router-dom";
import { UseFetch as useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
function Moviedetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
  const { movieData, loading, error } = useFetch(url);
  useEffect(() => {
    if (movieData) {
      setMovie(movieData);
    }
  }, [movieData])

  useEffect(()=>{
    if (movie && movie.title){
    document.title=`${movie.title} | MovieRadar`
    }
  },[movie.title])

  return (
    <main>
      {movie &&
        <div className="text-xl flex flex-col md:flex-row">
          <div className="min-w-xs h-full p-4">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="h-100 w-100 rounded" />
          </div>
          <div className="flex flex-col items-start p-4 ml-2 gap-4">
            <h1 className="text-4xl font-bold dark:text-white self-center md:self-start">{movie.title}</h1>
            <p className="dark:text-white">{movie.overview}</p>
            <p className="dark:text-white">
              {movie.genres && movie.genres.map((genre) =>
               <span className="border-1 border-gray-700 rounded p-2 mx-1 dark:text-white" key={genre.id}>{genre.name}</span>)}
            </p>
            <p className="dark:text-white">Release Date: {movie.release_date}</p>
            <p className="dark:text-white">Rating: {movie.vote_average}</p>
            <p className="dark:text-white">Runtime: {movie.runtime} minutes</p>
            <Link to={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">
            <p className="dark:text-white">See Imdb info</p>
            </Link>
          </div>
        </div>
      }
    </main>
  )
}

export default Moviedetails