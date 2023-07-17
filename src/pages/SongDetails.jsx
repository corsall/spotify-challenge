import React from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/features/shazamApi";
import RelatedSongs from "../components/RelatedSongs";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSong, playPause } from '../redux/features/playerSlice';

function SongDetails() {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data } = useGetSongRelatedQuery({ songid });
  const { data: songData } = useGetSongDetailsQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col flex-1 h-full p-8">
      <DetailsHeader songData={songData} />

      <h2 className="text-white text-4xl font-bold">Lyrics:</h2>

      <div className="mt-5">
        {songData?.sections[1].type === "LYRICS" ? (
          songData?.sections[1]?.text.map((line, i) => (
            <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">
              {line}
            </p>
          ))
        ) : (
          <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
        )}
      </div>
      <div className="pb-32 mt-8">
        <RelatedSongs
          data={data}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      </div>
    </div>
  );
}

export default SongDetails;
