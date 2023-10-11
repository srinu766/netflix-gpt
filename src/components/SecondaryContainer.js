import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  
  return (
    movies.nowPlayingMovies 
    && 
    movies.popularMovies 
    && 
    movies.topRatedMovies 
    && 
    movies.upComingMovies 
    && (
    <div className=' bg-black'>
    <div className='relative pl-10 z-20 -mt-40'>
    <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
    <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
    <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Up Coming Movies"} movies={movies.upComingMovies}/>  
    </div>
    </div>
    )
  )
}

export default SecondaryContainer
