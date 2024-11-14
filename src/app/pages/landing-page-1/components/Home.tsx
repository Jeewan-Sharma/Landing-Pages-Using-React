import { Button } from "primereact/button";
import React from "react";

const home = () => {
  return (
    <div className="px-5" style={{ background: "#EDEEF2" }}>
      <div className="flex align-items-center">
        <div className="w-8 flex flex-column align-items-center">
          <p className="text-7xl">Get In Shape Faster</p>
          <p className="text-7xl font-bold mt-2">Live Your Happy Life!</p>
          <p className="mt-5 text-2xl w-8 text-center font-light">
            An easy to follow 3-step program to shed pounds, boost energy, and
            increase longevity, on which men lose an average of 15 lbs., and
            women 10 lbs., in just one month.
          </p>
          <div className="mt-5 flex gap-4">
            <Button
              label="start your journey today"
              className="custom-secondary-button"
              rounded
            />
            <Button
              label="Find out more"
              className="custom-primary-button"
              rounded
            />
          </div>
          <div
            className="flex mt-7 gap-3 p-3 border-round align-items-center"
            style={{ background: "#FBF9F3" }}
          >
            <p>Recommended By:</p>
            <img src="images/recommendation1.png" alt="" />
            <img src="images/recommendation2.png" alt="" />
            <img src="images/recommendation3.png" alt="" />
          </div>
        </div>
        <div className="flex justify-content-center w-4">
          <img src="images/model.png" alt="model" />
        </div>
      </div>
    </div>
  );
};

export default home;
