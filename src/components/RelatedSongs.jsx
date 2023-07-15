import React from 'react'
import SongBar from './SongBar'

function RelatedSongs({data, isPlaying, activeSong, handlePauseClick, handlePlayClick}) {
  return (
    <div>
      <h2 className='text-white font-bold text-4xl'>Related Songs:</h2>
      {data?.tracks?.map((song, i) => (
        <SongBar
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  )
}

export default RelatedSongs