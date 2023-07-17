import React from "react";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

function SongBar({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {
  return (
    <div className="flex flex-row py-3 p-4 items-center">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>
      <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20 rounded-lg" />
      <div className="flex-1 flex flex-col truncate justify-center mx-3">
        <p className="text-xl font-bold text-white truncate">
          <Link to={`/spotify-challenge/songs/${song?.key}`}>{song?.title}</Link>
        </p>
        <p className="text-base text-gray-300 mt-1">
          <Link to={`/spotify-challenge/artists/${song?.artists[0].adamid}`}>{song?.subtitle}</Link>
        </p>
      </div>
      <div className="mx-8 cursor-pointer">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      </div>
    </div>
  );
}

export default SongBar;
