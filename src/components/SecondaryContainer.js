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
    <div className='bg-black w-screen '>
    <div className='relative pt-10  mt-0 md:-mt-60 '>
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

export default SecondaryContainer;
