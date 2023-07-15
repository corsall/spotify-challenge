import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';
import { Link } from 'react-router-dom';

function SongCard({song, i, data}) {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  return (
    <div className='flex flex-col w-[250px] bg-white/5 backdrop-blur-sm rounded-lg cursor-pointer p-6'>
      <div className='relative group'>
        <div className={`absolute w-full inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        </div>
        <img className='w-full h-full' alt='coverart' src={song.images?.coverart} ></img>
      </div>


      <div className='mt-4 flex flex-col'>
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={`/artists/${song?.artists[0]?.adamid}`}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard