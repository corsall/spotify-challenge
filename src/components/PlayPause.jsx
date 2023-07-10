import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

function PlayPause({activeSong, isPlaying, song, handlePause, handlePlay}) {
  return (
    (isPlaying && activeSong?.title === song.title ? 
      <FaPauseCircle
        size={40}
        className="text-gray-300"
        onClick={handlePause}
      /> : 
      <FaPlayCircle
        size={40}
        className="text-gray-300"
        onClick={handlePlay}
      />
    )
  )
}

export default PlayPause