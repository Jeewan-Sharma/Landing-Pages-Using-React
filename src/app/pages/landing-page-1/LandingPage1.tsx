import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Reviews from "./components/Reviews";
import ProgramInclusion from "./components/ProgramInclusion";
import Pricing from "./components/pricing";
import FAQ from "./components/FAQ";
import NewsLetter from "./components/NewsLetter";
import Nutritionist from "./components/Nutritionist";
import StartTodayBar from "./components/StartTodayBar";
import Footer from "./components/Footer";

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
      <FAQ />
      <NewsLetter />
      <Nutritionist />
      <StartTodayBar />
      <Footer />
    </div>
  );
};

export default LandingPage1;
