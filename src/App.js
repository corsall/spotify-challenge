import { useSelector } from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";
import SongCard from "./components/SongCard";
import Discover from "./pages/Discover";
import { useGetTopChartsQuery } from "./redux/features/shazamApi";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <SideBar/>
      <Discover/>
      {activeSong?.title && (
        <MusicPlayer/>
      )}
    </div>
  );
}

export default App;
