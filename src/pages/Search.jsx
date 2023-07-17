import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSongsBySearchQuery } from '../redux/features/shazamApi';
import SongCard from '../components/SongCard';

function Search() {
  const { searchTerm } = useParams();
  const {data} = useGetSongsBySearchQuery(searchTerm);
  console.log(data?.tracks?.hits);

  const songs = data?.tracks?.hits.map((song) => song.track);

  return (
    <div className="flex flex-1 flex-col h-full ">
      <h2 className="text-white font-bold text-3xl">Discover</h2>
      <div className="flex flex-wrap gap-8 justify-center px-4 pt-8 pb-24">
        {songs?.map((song, i) => (
          <SongCard 
            key={song.key} 
            song={song} 
            i={i} 
            data={data} 
          />
        ))}
      </div>
    </div>
  )
}

export default Search