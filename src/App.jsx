import { useState } from 'react'
import { Header, Footer, MovieCard } from './components/index.jsx'
import { MovieDetails, MovieList, PageNotFound, Search } from './pages/index.jsx'
import './App.css'
import Allroutes from './routes/Allroutes.jsx'

function App() {
  return (
    <>
      <Header />
      <Allroutes/>
      <Footer />
    </>
  )
}
export default App
