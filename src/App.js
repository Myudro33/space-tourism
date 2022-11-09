import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Crew from "./pages/Crew";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import SideMenu from "./components/SideMenu";

const App = () => {
  const [hash, sethash] = useState()
  const [icon, seticon] = useState(false);
  return (
    <div className="w-full h-screen">
        <Navbar hash={hash} icon={icon} seticon={seticon} />
        <SideMenu icon={icon} seticon={seticon} />
      <Routes>
        <Route path="/" element={<Home sethash={sethash} />} />
        <Route path="/destinations" element={<Destinations sethash={sethash} />} />
        <Route path="/crew" element={<Crew sethash={sethash} />} />
        <Route path="/technology" element={<Technology sethash={sethash} />} />
      </Routes>
    </div>
  );
};

export default App;
