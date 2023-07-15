import React from "react";
import SongBar from "./SongBar";
import ArtistBar from "./ArtistBar";

function RelatedSongs({ data, artistSongs, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {
  return (
    <div>
      <h2 className="text-white font-bold text-4xl">Related Songs:</h2>
      {artistSongs
        ? artistSongs?.data?.map((song, i) => (
            <ArtistBar 
              key={song.id}
              song={song}
              i={i}
            />))
        : data?.tracks?.map((song, i) => (
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
  );
}

export default RelatedSongs;
