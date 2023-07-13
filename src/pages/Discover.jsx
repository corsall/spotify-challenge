import React from "react";
import { useGetTopChartsQuery } from "../redux/features/shazamApi";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";

function Discover() {
  const {data, error, isLoading} = useGetTopChartsQuery();

  if(isLoading) return <Loader/>;

  return (
    <div className="flex flex-1 flex-col bg-gradient-to-br from-black to-[#121286] h-full ">
      <h2 className="text-white font-bold text-3xl">Discover Pop</h2>
      <div className="flex flex-wrap gap-8 justify-center px-4 pt-8 pb-24">
        {data?.tracks.map((song, i) => (
          <SongCard 
            key={song.key} 
            song={song} 
            i={i} 
            data={data} 
          />
        ))}
      </div>
    </div>
  );
}

export default Discover;
