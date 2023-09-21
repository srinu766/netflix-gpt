import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-screen aspect-video pt-[18%] px-14 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div>
    <button  className='bg-white p-3 px-14 text-xl text-black font-bold rounded-lg hover:bg-opacity-80'> Play</button>
        <button className='bg-gray-500 mx-2  p-3 px-12 text-xl text-white font-bold bg-opacity-50 rounded-lg hover:bg-opacity-40'>❕More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle


