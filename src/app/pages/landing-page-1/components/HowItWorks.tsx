import { Button } from "primereact/button";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="flex flex-column align-items-center my-7 px-3 md:px-5 lg:px-8">
      <p className="text-5xl lg:text-7xl">How It Works</p>
      <p className="text-2xl lg:text-4xl text-center mt-2 text-gray-900 font-light">
        3 Important Steps to Lose Healthy and Durable Your Weight
      </p>
      <div className="flex flex-wrap flex-row mt-8 gap-6 lg:gap-0">
        <div className="w-full lg:w-4 flex gap-3">
          <div className="w-1 lg:w-2">
            <p className="custom-primary-color font-bold text-center text-5xl lg:text-7xl">
              1.
            </p>
          </div>
          <div className="w-11">
            <p className="font-bold text-xl">Eliminate Sugars and Starches</p>
            <p className="text-gray-900 text-lg mt-2">
              One of the most important part.
            </p>
            <p className="mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec.
              Lorem ipsum dolor sit amet, consectetur adipiscin elit.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-4 flex gap-3">
          <div className="w-1 lg:w-2">
            <p className="custom-primary-color font-bold text-center text-5xl lg:text-7xl">
              2.
            </p>
          </div>
          <div className="w-11">
            <p className="font-bold text-xl">Eat Protein, Fat and Vegetables</p>
            <p className="text-gray-900 text-lg mt-2">
              Meals should include a protein source.
            </p>
            <p className="mt-3 text-lg">
              Sed nec sit elit. Dolor sit amet ipsum, consetetur sadipscing
              elitr, sed diam ips nonumy eirmod tempor invidunt.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-4 flex gap-3">
          <div className="w-1 lg:w-2">
            <p className="custom-primary-color font-bold text-center text-5xl lg:text-7xl">
              3.
            </p>
          </div>
          <div className="w-11">
            <p className="font-bold text-xl">Exercise 3-4 Times Per Week</p>
            <p className="text-gray-900 text-lg mt-2">
              It is important to exercise to lose weight.
            </p>
            <p className="mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec.
              Lorem ipsum dolor sit amet, consectetur adipiscin elit.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <Button
          label="Start Your Journey Today"
          className="custom-outlined-primary-to-secondary-button"
          rounded
          outlined
          size="large"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
