import { useSelector } from "react-redux";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/SideBar";
import Discover from "./pages/Discover";
import { Routes, Route } from "react-router-dom";
import TopPlay from "./components/TopPlay";
import SongDetails from "./pages/SongDetails";
import ArtistDetails from "./pages/ArtistDetails";
import AroundYou from "./pages/AroundYou";
import TopArtists from "./pages/TopArtists";
import TopCharts from "./pages/TopCharts";
import SearchBar from "./components/SearchBar";
import Search from "./pages/Search";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex h-screen">
      <SideBar/>

      <div className="flex flex-col flex-1 bg-gradient-to-br from-black to-[#121286] px-6 overflow-y-scroll no-scrollbar">
        <SearchBar/>

        <div className="flex w-full xl:flex-row flex-col-reverse">
          <Routes>
            <Route path="/" element={<Discover />}/>
            <Route path="/songs/:songid" element={<SongDetails />} />
            <Route path="/artists/:id" element={<ArtistDetails/>} />
            <Route path="/around-you" element={<AroundYou/>} />
            <Route path="/top-artists" element={<TopArtists/>} />
            <Route path="/top-charts" element={<TopCharts/>} />
            <Route path="/search/:searchTerm" element={<Search/>} />
          </Routes>

          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay/>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <MusicPlayer/>
      )}
    </div>
  );
}

export default App;
