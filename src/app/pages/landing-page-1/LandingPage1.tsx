import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Reviews from "./components/Reviews";
import ProgramInclusion from "./components/ProgramInclusion";
import Pricing from "./components/pricing";

const LandingPage1 = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <HowItWorks />
      <Recipes />
      <Reviews />
      <ProgramInclusion />
      <Pricing />
    </div>
  );
};

export default LandingPage1;
