import { Button } from "primereact/button";
import React from "react";

const pricing = () => {
  return (
    <div className="py-7 px-3 md:px-5 lg:px-8">
      <p className="text-3xl lg:text-4xl text-center">
        Great Values Low Prices
      </p>
      <p className="text-xl lg:text-2xl text-center mt-2 text-gray-900 font-light">
        Get individual diet plans & support to help you lose weight.
      </p>
      <div className="flex flex-wrap mt-5">
        <div className="w-full lg:w-3 hidden lg:block">
          <div
            className="border-1 border-gray-200 p-4 h-8rem"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-lg font-bold">&nbsp;</p>
          </div>
          <div
            className="border-1 border-gray-200 h-10rem p-4 flex align-items-center justify-content-end"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-lg font-bold blue-text">PRICE</p>
          </div>
          <div
            className="border-1 border-gray-200 p-4"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-right text-lg font-bold blue-text">Diet Plan</p>
          </div>
          <div
            className="border-1 border-gray-200 p-4"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-right text-lg font-bold blue-text">
              Body Shape Plan
            </p>
          </div>
          <div
            className="border-1 border-gray-200 p-4"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-right text-lg font-bold blue-text">
              Online Recipe Club
            </p>
          </div>
          <div
            className="border-1 border-gray-200 p-4"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-right text-lg font-bold blue-text">
              Dial Diagnosis
            </p>
          </div>
          <div
            className="border-1 border-gray-200 p-4"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-right text-lg font-bold blue-text">
              Personal Diet Coach
            </p>
          </div>
          <div
            className="border-1 border-gray-200 p-4 h-6rem"
            style={{ background: "#F8F9FC" }}
          >
            <p className="text-lg font-bold">&nbsp;</p>
          </div>
        </div>
        <div className="w-full lg:w-3">
          <div
            className="border-1 border-gray-200 p-4 h-8rem"
            style={{ background: "#F8F9FC" }}
          >
            <p className="font-bold text-2xl text-center mt-4">Standard</p>
            <p className="text-lg text-center">8 weeks membership</p>
          </div>
          <div className="border-1 border-gray-200 p-4 h-10rem">
            <div className="flex align-items-center gap-2 justify-content-center">
              <p className="text-lg blue-text">$</p>
              <p className="text-8xl blue-text">29</p>
              <p className="text-lg blue-text">/month</p>
            </div>
          </div>
          <div className="border-1 border-gray-200 p-4">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Diet Plan
            </p>
            <p className="text-center text-lg mt-2 lg:mt-0">1</p>
          </div>
          <div className="border-1 border-gray-200 p-4">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Body Shape Plan
            </p>
            <p className="text-center text-lg mt-2 lg:mt-0">1</p>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Online Recipe Club
            </p>
            <i className="pi pi-check font-bold text-xl text-green-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Diet Diagnosis
            </p>
            <i className="pi pi-times font-bold text-xl text-red-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Personal Diet Coach
            </p>
            <i className="pi pi-times font-bold text-xl text-red-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 flex justify-content-center h-6rem">
            <div>
              <Button
                label="Start Today"
                className="custom-outlined-primary-to-secondary-button"
                rounded
                outlined
                size="large"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3 border-2 border-red-600">
          <div
            className="border-1 border-gray-200 p-4 h-8rem"
            style={{ background: "#F8F9FC" }}
          >
            <p className="font-bold text-2xl text-center mt-4">Standard</p>
            <p className="text-lg text-center">8 weeks membership</p>
          </div>
          <div className="border-1 border-gray-200 p-4 h-10rem">
            <div className="flex align-items-center gap-2 justify-content-center">
              <p className="text-lg blue-text">$</p>
              <p className="text-8xl blue-text">49</p>
              <p className="text-lg blue-text">/month</p>
            </div>
          </div>
          <div className="border-1 border-gray-200 p-4">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Diet Plan
            </p>
            <p className="text-center text-lg mt-2 lg:mt-0">2</p>
          </div>
          <div className="border-1 border-gray-200 p-4">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Body Shape Plan
            </p>
            <p className="text-center text-lg mt-2 lg:mt-0">2</p>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Online Recipe Club
            </p>
            <i className="pi pi-check font-bold text-xl text-green-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Diet Diagnosis
            </p>
            <i className="pi pi-check font-bold text-xl text-green-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Personal Diet Coach
            </p>
            <i className="pi pi-times font-bold text-xl text-red-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 flex justify-content-center h-6rem">
            <div>
              <Button
                label="Start Today"
                className="custom-outlined-primary-to-secondary-button"
                rounded
                outlined
                size="large"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3">
          <div
            className="border-1 border-gray-200 p-4 h-8rem"
            style={{ background: "#F8F9FC" }}
          >
            <p className="font-bold text-2xl text-center mt-4">Standard</p>
            <p className="text-lg text-center">8 weeks membership</p>
          </div>
          <div className="border-1 border-gray-200 p-4 h-10rem">
            <div className="flex align-items-center gap-2 justify-content-center">
              <p className="text-lg blue-text">$</p>
              <p className="text-8xl blue-text">99</p>
              <p className="text-lg blue-text">/month</p>
            </div>
          </div>
          <div className="border-1 border-gray-200 p-4">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Diet Plan
            </p>
            <p className="text-center text-lg mt-2 lg:mt-0">5</p>
          </div>
          <div className="border-1 border-gray-200 p-4">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Body Shape Plan
            </p>
            <p className="text-center text-lg mt-2 lg:mt-0">UNLIMITED</p>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Online Recipe Club
            </p>
            <i className="pi pi-check font-bold text-xl text-green-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Diet Diagnosis
            </p>
            <i className="pi pi-check font-bold text-xl text-green-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 text-center">
            <p className="text-center text-lg blue-text lg:hidden font-semibold">
              Personal Diet Coach
            </p>
            <i className="pi pi-check font-bold text-xl text-green-600 mt-2 lg:mt-0"></i>
          </div>
          <div className="border-1 border-gray-200 p-4 flex justify-content-center h-6rem">
            <div>
              <Button
                label="Start Today"
                className="custom-outlined-primary-to-secondary-button"
                rounded
                outlined
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pricing;
