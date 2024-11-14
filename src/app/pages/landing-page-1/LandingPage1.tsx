import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Header from "./components/Header";

const LandingPage1 = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <HowItWorks />
    </div>
  );
};

export default LandingPage1;
