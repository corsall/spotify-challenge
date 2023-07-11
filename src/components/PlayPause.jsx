import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

function PlayPause({activeSong, isPlaying, song, handlePause, handlePlay}) {
  return (
    (isPlaying && activeSong?.title === song.title ?
      <div className='flex w-full h-full justify-center items-center' onClick={handlePause}>
        <FaPauseCircle
          size={40}
          className="text-gray-300"
        /> 
      </div>
      :
      <div className='flex w-full h-full justify-center items-center' onClick={handlePlay}>
        <FaPlayCircle
          size={40}
          className="text-gray-300"
        />
      </div>
    )
  )
}

export default PlayPause