import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies);

    // if(!movies) return

  return (
    <div className='px-3 md:pl-10 text-white'>
      <h1 className='text-xl md:text-3xl py-4'>{title}</h1>
    <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies.map((movie)=> <MovieCard key={movie?.id} posterPath={movie?.poster_path}/> )}
        </div>
    </div>
    </div>
  )
}

export default MovieList
