import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const NewsLetter = () => {
  return (
    <div className="md:px-5 lg:px-8 py-7 background-2 bg-right">
      <div className="w-full lg:w-6 bg-white border-round border-bottom	p-6 border-custom-primary-color">
        <p className="text-4xl md:text-4xl mt-4 custom-primary-color">
          Subscribe to Our Newsletters
        </p>
        <p className="text-gray-900 text-xl md:text-2xl mt-2">
          Let us bring health advice directly to you.
        </p>
        <p className="mt-5 text-lg">
          Have you been wanting to improve your lifestyle and get healthier?
        </p>
        <p className="mt-2 font-bold text-lg">
          Don’t wait: Start TODAY! TODAY’s
        </p>
        <div className="mt-5">
          <InputText
            type="text"
            className="p-inputtext-lg w-full bg-gray-200"
            placeholder="E-Mail Address"
          />
        </div>
        <div className="lg:flex justify-content-between align-items-center mt-4">
          <div>
            <Button
              label="Subscribe"
              className="custom-primary-button"
              size="large"
              rounded
            />
          </div>
          <p className="mt-2 lg:mt-0 text-xs md:text-sm">
            * We don’t share your personal info with anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
