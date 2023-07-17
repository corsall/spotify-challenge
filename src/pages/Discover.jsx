import React from "react";
import { useGetTopChartsQuery } from "../redux/features/shazamApi";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";

function Discover() {
  const {data, isLoading} = useGetTopChartsQuery();

  if(isLoading) return <Loader/>;

  return (
    <div className="flex flex-1 flex-col h-full ">
      <h2 className="text-white font-bold text-3xl">Discover</h2>
      <div className="flex flex-wrap gap-8 justify-center pt-8 pb-28">
        {data?.tracks?.map((song, i) => (
          <SongCard 
            key={song?.key} 
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
