import React from 'react'
import { useGetTopChartsQuery } from '../redux/features/shazamApi'
import PlayPause from './PlayPause';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Link } from 'react-router-dom';

function TopChartCard({song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {

  return (
    <div className='flex flex-row py-3 p-4 items-center'>
      <h3 className='font-bold text-base text-white mr-3'>{i + 1}</h3>
      <img src={song?.images?.coverart} alt={song?.title} className='w-20 h-20 rounded-lg'/>
      <div className='flex-1 flex flex-col truncate justify-center mx-3'>
        <p className='text-xl font-bold text-white truncate'>
        <Link to={`/songs/${song.key}`}>
          {song?.title}
        </Link>
        </p>
        <p className='text-base text-gray-300 mt-1'>
          {song?.subtitle}
        </p>
      </div>
      <div className='mx-8 cursor-pointer'>
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
    </div>
  )
}


function TopPlay() {
  const dispatch = useDispatch();
  const { data } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const topPlays = data?.tracks.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };


  return (
    <div className='max-w-[500px] justify-start'>
      <h2 className='text-white font-bold text-2xl mb-6'>Top Charts</h2>
      {topPlays?.map((song, i) => (
        <TopChartCard
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={() => handlePlayClick(song, i)}
        />
      ))}

      <div className='mt-8'>
        <h2 className='text-white font-bold text-2xl mb-6'>Top Artists</h2>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
        >
          {topPlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '25%', height: 'auto' }}
            >
              <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </div>
  )
}

export default TopPlay