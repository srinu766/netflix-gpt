import React, { useRef } from 'react'
import lang from '../utils/languageConstatnts'
import { useSelector } from 'react-redux'
import openai from '../utils/openAi'

const GptSearchBar = () => {


  const langKey = useSelector((store) => store.config.lang )
  const searchText = useRef(null);
  

  const handleGptSearchClick = async()=>{
    console.log(searchText.current.value); 

    //Make an API call to get Movie results.

    const gptQuory = "Act as a movie recommendation system and suggest some movie for quory : "+
     searchText.current.value +
      ", Only names of 5 movies and comma separated like the example result given ahead. Example result : Gadar, Sholay, Don, Golmaal, Koi mil gaya";

    const GptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuory }],
      model: 'gpt-3.5-turbo',
    });
    if(!GptResults.choices){
      return null;
      // TODO : Write error handling
    }
    console.log(GptResults.choices?.[0].message?.content);
    //'Andaz Apna Apna, Hera pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan'

    const gptMovies = GptResults.choices?.[0].message?.content.split(",")
    // ['Andaz Apna Apna', 'Hera pheri', 'Chupke Chupke', 'Jaane Bhi Do Yaaro', 'Padosan']

  }

  return (
    <div className='pt-[45%] md:pt-[10%]  flex justify-center'>  
      <form className='w-full md:w-1/2 absolute bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} className='p-4 m-4 rounded-lg col-span-9' type='text'  placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className='bg-red-800 text-white p-4 m-4 rounded-lg col-span-3' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar