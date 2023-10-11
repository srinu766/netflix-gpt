import React from 'react'
import lang from '../utils/languageConstatnts'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang )

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 absolute bg-black grid grid-cols-12 '>
        <input className='p-4 m-4 rounded-lg col-span-9' type='text'  placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='bg-red-800 text-white p-4 m-4 rounded-lg col-span-3'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar