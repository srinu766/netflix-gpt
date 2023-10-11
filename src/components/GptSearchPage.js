import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>

    <div className='absolute bg-black bg-opacity-50 -z-10'>
    <img className=' ' src={BG_IMG}  alt='bg-img'/>
    </div>

      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
