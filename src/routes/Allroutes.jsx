import React from 'react'
import { MovieDetails, MovieList, PageNotFound, Search, Home } from '../pages'
import { Routes, Route } from 'react-router-dom'
import { ScrollRestoration } from "react-router-dom";

function Allroutes() {
  return (
    <>
      <div className='dark:bg-gray-800'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/popular' element={<MovieList />} />
          <Route path='/movie/top_rated' element={<MovieList />} />
          <Route path='/movie/upcoming' element={<MovieList />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/search/movie/:name' element={<Search />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default Allroutes