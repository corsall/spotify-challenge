import Player from "./components/Player";
import SideBar from "./components/SideBar";
import SongCard from "./components/SongCard";
import { useGetTopChartsQuery } from "./redux/features/shazamApi";

function App() {
  const {data, error, isLoading} = useGetTopChartsQuery();

  return (
    <div className="relative flex">
      <SideBar/>

      <div className="flex flex-1 flex-col bg-gradient-to-br from-black to-[#121286] h-full">
        <div className="flex flex-wrap gap-8 justify-center">
          {data?.tracks.map((song) => (
            <SongCard key={song.key} song={song}/>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Player/>
      </div>
    </div>
  );
}

export default App;
