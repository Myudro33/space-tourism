import React from "react";
import { Route, Routes } from "react-router-dom";
import Crew from "./pages/Crew";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
