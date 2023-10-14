import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 md:w-52 pr-5'>
      <img alt='card img' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;
