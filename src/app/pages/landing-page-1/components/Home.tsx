import { Button } from "primereact/button";
import React from "react";
import "./styles.scss";

const home = () => {
  return (
    <div className="px-3 md:px-5 lg:px-8" style={{ background: "#EDEEF2" }}>
      <div className="flex flex-wrap align-items-center relative">
        <div className="w-full lg:w-8 flex flex-column align-items-center absolute lg:relative text-shadow z-3">
          <p className="text-4xl md:text-7xl">Get In Shape Faster</p>
          <p className="text-4xl md:text-7xl font-bold mt-1 lg:mt-2">
            Live Your Happy Life!
          </p>
          <p className="mt-3 lg:mt-5 text-xl md:text-4xl w-8 text-center font-medium lg:font-light">
            An easy to follow 3-step program to shed pounds, boost energy, and
            increase longevity, on which men lose an average of 15 lbs., and
            women 10 lbs., in just one month.
          </p>
          <div className="mt-3 md:mt-7 lg:mt-5 flex flex-column lg:flex-row flex-wrap gap-2 md:gap-4 lg:gap-2">
            <div>
              <Button
                label="start your journey today"
                className="custom-secondary-button"
                rounded
                size="large"
              />
            </div>
            <div className="flex justify-content-center">
              <Button
                label="Find out more"
                className="custom-primary-button"
                rounded
                size="large"
              />
            </div>
          </div>
          <div
            className="flex flex-column lg:flex-row mt-4 md:mt-7 gap-3 p-3 border-round lg:align-items-center"
            style={{ background: "#FBF9F3" }}
          >
            <p>Recommended By:</p>
            <div className="flex gap-3">
              <img
                src="images/recommendation1.png"
                alt="Rec"
                className="w-4rem h-4rem md:w-auto md:h-auto"
              />
              <img
                src="images/recommendation2.png"
                alt="Rec"
                className="w-4rem h-4rem md:w-auto md:h-auto"
              />
              <img
                src="images/recommendation3.png"
                alt="Rec"
                className="w-4rem h-4rem md:w-auto md:h-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4 lg:flex justify-content-center z-1">
          <img className="hidden lg:block" src="images/model.png" alt="model" />
          <img
            className="lg:hidden opacity-70"
            src="images/model.png"
            alt="model"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
