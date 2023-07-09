import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";
import SongCard from "./components/SongCard";
import Discover from "./pages/Discover";
import { useGetTopChartsQuery } from "./redux/features/shazamApi";

function App() {

  return (
    <div className="relative flex">
      <SideBar/>
      <Discover/>

      <MusicPlayer/>
    </div>
  );
}

export default App;
