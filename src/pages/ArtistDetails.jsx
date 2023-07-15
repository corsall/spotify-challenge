import React from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";
import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery} from "../redux/features/shazamApi";
import RelatedSongs from "../components/RelatedSongs";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSong, playPause } from '../redux/features/playerSlice';

function ArtistDetails() {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: artistSongs, isFetching: isFetchinRelatedSongs} = useGetArtistTopSongsQuery({ artistId });
  const { data: artistData} = useGetArtistDetailsQuery({ artistId });

  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };

  // const handlePlayClick = (song, i) => {
  //   dispatch(setActiveSong({ song, data, i }));
  //   dispatch(playPause(true));
  // };

  return (
    <div className="flex flex-col flex-1 h-full p-8">
      <DetailsHeader artistData={artistData}/>

      <div className="pb-32 mt-8">
        <RelatedSongs
          artistSongs={artistSongs}
        />
      </div>
    </div>
  );
}

export default ArtistDetails;
