import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  
  return (
    movies.nowPlayingMovies 
    && 
    movies.popularMovies 
    && (
    <div className=' bg-black'>
    <div className='relative pl-10 z-20 -mt-40'>
    <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
    <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Up Coming Movies"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
    )
  )
}

export default SecondaryContainer
