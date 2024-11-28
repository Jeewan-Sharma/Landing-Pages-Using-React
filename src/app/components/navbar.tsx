"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import "./style.scss";

interface LandingPage {
  name: string;
  code: string;
}

const Navbar = () => {
  // dropdown
  const [selectedPage, setSelectedPage] = useState<LandingPage | null>(null);
  const cities: LandingPage[] = [
    { name: "Landing Page 1", code: "/landing-page-1" },
    { name: "Landing Page 2", code: "/landing-page-2" },
  ];

  // navigate
  const navigate = useNavigate();

  //show and hide bar
  const [showBar, setShowBar] = useState(true);
  const removeBar = () => {
    setShowBar(false);
  };

  return (
    <div>
      {showBar && (
        <div className="bg-gray-900 px-3 md:px-5 lg:px-8 py-3 lg:py-2 w-full flex justify-content-between align-items-center">
          <div className="flex gap-3 align-items-center">
            <img
              src="images/Gentleman_White.png"
              alt="Logo"
              className="w-2rem"
            />
            <p className="hidden md:flex text-4xl text-white font-permanent-marker">
              Landing Pages
            </p>
            <div className="overwrite-dropdown flex justify-content-center">
              <Dropdown
                value={selectedPage}
                onChange={(e: DropdownChangeEvent) => {
                  setSelectedPage(e.value);
                  navigate(e.value.code);
                }}
                options={cities}
                optionLabel="name"
                placeholder="Select a Landing Page"
              />
            </div>
          </div>
          <Button
            className="hidden md:block"
            label="Remove Bar"
            icon="pi pi-times"
            size="small"
            outlined
            onClick={removeBar}
          />
          <Button
            className="md:hidden"
            icon="pi pi-times"
            size="small"
            outlined
            onClick={removeBar}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
