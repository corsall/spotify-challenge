import { useSelector } from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";
import Discover from "./pages/Discover";
import { Routes, Route } from "react-router-dom";
import TopPlay from "./components/TopPlay";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <SideBar/>

      <div className="flex flex-1 bg-gradient-to-br from-black to-[#121286] pt-6 min-h-screen">
        <Routes>
          <Route path="/" element={<Discover />}/>
        </Routes>

        <div className="">
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
