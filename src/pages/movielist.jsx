import { MovieCard } from '../components'
import {UseFetch as useFetch} from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function MovieList() {
  const location=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const url=`https://api.themoviedb.org/3${location.pathname}?language=en-US&api_key=${import.meta.env.VITE_API_KEY}`;
  const {movieData,loading,error}=useFetch(url);
  return (
    <main>
      <section className="mx-auto py-2">
        <div className="max-w-6xl py-5 flex flex-wrap justify-center md:justify-evenly mx-auto gap-4">
          {movieData && movieData.map((movie)=>(
            <MovieCard key={movie.id}  movie={movie} title={movie.title} overview={movie.overview} poster={movie.poster_path}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MovieList