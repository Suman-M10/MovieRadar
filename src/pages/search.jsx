import { MovieCard } from '../components'
import {UseFetch as useFetch} from '../hooks/useFetch';
import { useLocation,useParams } from 'react-router-dom';
import { useEffect } from 'react';
function Search() {
  const location=useLocation();
  const {name}=useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const url=`https://api.themoviedb.org/3/search/movie?query=${name}&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`;
  const {movieData,loading,error}=useFetch(url);
  return (
    <main>
      <section>
        <div className='py-5 pl-5'>
          {movieData&&movieData.length===0?<h1 className='text-2xl dark:text-white'>{`No movies found for '${name}'`}</h1>:<h1 className='text-2xl dark:text-white'>{`Search results for '${name}'`}</h1>}
        </div>
      </section>
      <section className="mx-auto py-2">
        <div className="max-w-6xl py-5 flex flex-wrap justify-center md:justify-start mx-auto gap-4">
          {movieData && movieData.map((movie)=>(
            <MovieCard key={movie.id}  movie={movie} title={movie.title} overview={movie.overview} poster={movie.poster_path}/>
          ))}
        </div>
      </section>
    </main>
  )
}
export default Search