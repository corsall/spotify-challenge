import React from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";
import { useGetSongDetailsQuery } from "../redux/features/shazamApi";

function SongDetails() {
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

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



    </div>
  );
}

export default SongDetails;
