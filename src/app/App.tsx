import React from "react";
import "./App.scss";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import LandingPage1 from "./pages/landing-page-1/LandingPage1";
import LandingPage2 from "./pages/landing-page-2/LandingPage2";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage1 />} />
        <Route path="/landing-page-1" element={<LandingPage1 />} />
        <Route path="/landing-page-2" element={<LandingPage2 />} />
      </Routes>
      <UnderConstruction />
    </div>
  );
}

export default App;
