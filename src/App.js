import { useSelector } from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";
import Discover from "./pages/Discover";
import { Routes, Route } from "react-router-dom";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <SideBar/>
      <Routes>
        <Route path="/" element={<Discover />}/>
      </Routes>
      {activeSong?.title && (
        <MusicPlayer/>
      )}
    </div>
  );
}

export default App;
