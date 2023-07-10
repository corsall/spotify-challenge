import React, { useState } from 'react'
import { BsFillPauseFill, BsFillPlayFill} from "react-icons/bs";
import VolumeBar from './VolumeBar';
import Player from './Player';
import { useDispatch, useSelector } from 'react-redux';
import { playPause } from '../../redux/features/playerSlice';

function MusicPlayer() {
  const { activeSong, isPlaying} = useSelector((state) => state.player);
  const [volume, setVolume] = useState(0.3);
  const [seekTime, setSeekTime] = useState(0);
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  return (
    <div className='flex flex-row fixed bottom-0 left-0 right-0 w-full bg-[#212121] h-20 items-center'>

      {/* left-controls */}
      <div className='flex basis-1/4 ml-20'>
        {isPlaying ? (<BsFillPauseFill size={40} color='#FFF'className='cursor-pointer' onClick={handlePlayPause}/>) : 
        (<BsFillPlayFill size={40} color='#FFF'className='cursor-pointer' onClick={handlePlayPause}/>)}
      </div>

      {/* center-controls */}
      <div className='relative flex justify-center basis-1/2 text-white font-bold h-20'>
        <img src={activeSong?.images?.coverart} alt="cover art" className='object- m-4 rounded-sm'/>
        <div className='flex flex-col mt-4 ml-2'>
          <p className=''>
            {activeSong?.title}
          </p>
          <p className='text-[#FFFFFFB3]'>
            {activeSong?.subtitle}
          </p>
        </div>
      </div>

      {/* right-controls */}
      <div className='flex basis-1/4 justify-end mr-20'>
        <VolumeBar
          value={volume}
          onChange={(event) => setVolume(event.target.value)}
          setVolume={setVolume}
        />
      </div>

      <Player
        activeSong={activeSong}
        volume={volume}
        isPlaying={isPlaying}
      />
    </div>
  )
}

export default MusicPlayer