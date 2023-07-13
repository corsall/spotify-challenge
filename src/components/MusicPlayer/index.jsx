import React, { useEffect, useState } from 'react'
import { BsFillPauseFill, BsFillPlayFill, BsFillSkipEndFill, BsFillSkipStartFill} from "react-icons/bs";
import VolumeBar from './VolumeBar';
import Player from './Player';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, changeSong } from '../../redux/features/playerSlice';
import Seekbar from './Seekbar';

function MusicPlayer() {
  const { activeSong, isPlaying, currentSongs, currentIndex} = useSelector((state) => state.player);
  const [volume, setVolume] = useState(0.3);
  const [appTime, setAppTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currentSongs.length) dispatch(playPause(true));
  // }, [currentIndex]);

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  const handleNextSong = () => {
    dispatch(changeSong((currentIndex + 1) % currentSongs.length));
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(changeSong(currentSongs.length - 1));
    } else {
      dispatch(changeSong(currentIndex - 1));
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  return (
    <div className='flex flex-row fixed bottom-0 left-0 right-0 w-full bg-[#212121] h-20 items-center'>
      {/* youTube like seekBar */}
      <Seekbar
        value={appTime}
        max={duration}
        onInput={(event) => setSeekTime(event.target.value)}
      />
      {/* left-controls */}
      <div className='flex basis-1/4 ml-20 items-center'>
        <BsFillSkipStartFill size={40} color='#FFF' className='cursor-pointer mr-8' onClick={handlePrevSong}/>

        {isPlaying ? (<BsFillPauseFill size={40} color='#FFF'className='cursor-pointer' onClick={handlePlayPause}/>) : 
        (<BsFillPlayFill size={40} color='#FFF'className='cursor-pointer' onClick={handlePlayPause}/>)}

        <BsFillSkipEndFill size={40} color='#FFF' className='cursor-pointer ml-8' onClick={handleNextSong}/>


        <p className="ml-10 text-[#FFFFFFB3] text-sm">
          {`${appTime === 0 ? '0:00' : getTime(appTime)} / 
            ${duration === 0 ? '0:00' : getTime(duration)}`}
        </p>
      </div>

      {/* center-controls */}
      <div className='flex justify-center basis-1/2 text-white font-bold h-20'>
        <img src={activeSong?.images?.coverart} alt="cover art" className='object- m-4 rounded-sm'/>
        <div className='flex flex-col mt-4 ml-2'>
          <p className=''>
            {activeSong?.title}
          </p>
          <p className='text-[#FFFFFFB3] font-normal'>
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
        seekTime={seekTime}
        activeSong={activeSong}
        volume={volume}
        isPlaying={isPlaying}
        onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
        onLoadedData={(event) => setDuration(event.target.duration)}
        onEnded={handleNextSong}
      />
    </div>
  )
}

export default MusicPlayer