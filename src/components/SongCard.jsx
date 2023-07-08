import React from 'react'
import { useDispatch } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/playerSlice';

function SongCard({song}) {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({song}));
    dispatch(playPause(true));
  }

  return (
    <div className='flex flex-col w-[250px] bg-white/5 backdrop-blur-sm rounded-lg cursor-pointer p-6' onClick={handlePlayClick}>

      <img className='w-full h-full' alt='coverart' src={song.images?.coverart} ></img>

      <div className='mt-4 flex flex-col'>
        <p className="font-semibold text-lg text-white truncate">
          {song.title}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {song.subtitle}
        </p>
      </div>
    </div>
  )
}

export default SongCard