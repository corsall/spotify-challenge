import React from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";
import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery} from "../redux/features/shazamApi";
import RelatedSongs from "../components/RelatedSongs";

function ArtistDetails() {
  const { id: artistId } = useParams();

  const { data: artistSongs} = useGetArtistTopSongsQuery({ artistId });
  const { data: artistData} = useGetArtistDetailsQuery({ artistId });


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
