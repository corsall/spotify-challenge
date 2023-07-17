import React, {useState } from 'react'
import {IoPlaySharp, IoPlaySkipForwardSharp, IoPlaySkipBackSharp, IoPauseSharp} from "react-icons/io5";
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
    <div className='flex flex-row fixed bottom-0 left-0 right-0 w-full bg-[#212121] h-[72px] items-center z-40'>
      {/* youTube like seekBar */}
      <Seekbar
        value={appTime}
        max={duration}
        onInput={(event) => setSeekTime(event.target.value)}
      />
      {/* left-controls */}
      <div className='flex w-1/4 items-center ml-6 xl:ml-20'>
        <div className='flex items-center'>
          <IoPlaySkipBackSharp size={22} color='#FFF' className='cursor-pointer mr-5 xl:mr-8' onClick={handlePrevSong}/>

          {isPlaying ? (<IoPauseSharp size={34} color='#FFF'className='cursor-pointer' onClick={handlePlayPause}/>) : 
          (<IoPlaySharp size={34} color='#FFF' className='cursor-pointer ' onClick={handlePlayPause}/>)}

          <IoPlaySkipForwardSharp size={22} color='#FFF' className='cursor-pointer ml-5 xl:ml-8' onClick={handleNextSong}/>
        </div>


        <p className="ml-10 text-[#FFFFFFB3] text-sm hidden xl:flex">
          {`${appTime === 0 ? '0:00' : getTime(appTime)} / 
            ${duration === 0 ? '0:00' : getTime(duration)}`}
        </p>
      </div>

      {/* center-controls */}
      <div className='flex w-full xl:w-1/2 justify-center text-white font-bold h-20'>
        <img src={activeSong?.images?.coverart} alt="cover art" className='object- m-4 rounded-sm'/>
        <div className='flex flex-col mt-4 ml-2 truncate'>
          <p className='truncate'>
            {activeSong?.title}
          </p>
          <p className='text-[#FFFFFFB3] font-normal truncate'>
            {activeSong?.subtitle}
          </p>
        </div>
      </div>

      {/* right-controls */}
      <div className='w-1/4 justify-end mr-4 hidden xl:mr-20 xl:flex'>
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