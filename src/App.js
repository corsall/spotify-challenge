import { useSelector } from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";
import Discover from "./pages/Discover";
import { Routes, Route } from "react-router-dom";
import TopPlay from "./components/TopPlay";
import SongDetails from "./pages/SongDetails";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <SideBar/>

      <div className="flex w-full last:bg-gradient-to-br from-black to-[#121286] min-h-screen xl:flex-row flex-col-reverse h-screen overflow-y-scroll no-scrollbar">
        <Routes>
          <Route path="/" element={<Discover />}/>
          <Route path="/songs/:songid" element={<SongDetails />} />
        </Routes>

        <div className="xl:sticky relative top-0 h-fit pt-6">
          <TopPlay/>
        </div>
      </div>



      {activeSong?.title && (
        <MusicPlayer/>
      )}
    </div>
  );
}

export default App;
