import React from "react";
import { useGetTopChartsQuery } from "../redux/features/shazamApi";
import SongCard from "../components/SongCard";

function Discover() {
  const {data, error, isLoading} = useGetTopChartsQuery();

  return (
    <div className="flex flex-1 flex-col bg-gradient-to-br from-black to-[#121286] h-full">
      <h2 className="text-white font-bold text-3xl">Discover Pop</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {data?.tracks.map((song) => (
          <SongCard key={song.key} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Discover;
