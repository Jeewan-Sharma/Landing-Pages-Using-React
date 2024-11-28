import React from "react";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const navbar = () => {
  return (
    <div className="hidden lg:block">
      <div
        className="flex align-items-center justify-content-between px-8 py-3"
        style={{ background: "#F4F6F7" }}
      >
        <div className="flex gap-4">
          <Link to="/">
            <p className="text-xl hover-custom-primary-color">Home</p>
          </Link>
          <Link to="/">
            <p className="text-xl hover-custom-primary-color">How It Works</p>
          </Link>
          <Link to="/">
            <p className="text-xl hover-custom-primary-color">Recipes</p>
          </Link>
          <Link to="/">
            <p className="text-xl hover-custom-primary-color">Reviews</p>
          </Link>
          <Link to="/">
            <p className="text-xl hover-custom-primary-color">Program</p>
          </Link>
          <Link to="/">
            <p className="text-xl hover-custom-primary-color">Pricing</p>
          </Link>
          <Link to="/">
            <p className="text-xl hover-custom-primary-color">Blog</p>
          </Link>
        </div>
        <div>
          <div className="p-inputgroup flex-1">
            <InputText placeholder="search" />
            <Button
              icon="pi pi-search"
              className="bg-gray-500 border-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
