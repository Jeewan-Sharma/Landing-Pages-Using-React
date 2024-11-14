"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";

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
        <div className="bg-gray-900 px-5 py-2">
          <div className="flex justify-content-between align-items-center">
            <div className="flex gap-3 align-items-center">
              <img
                src="images/Gentleman_White.png"
                alt="Logo"
                className="w-2rem"
              />
              <p className="text-4xl text-white font-permanent-marker">
                Landing Pages
              </p>
              <div className="card flex justify-content-center">
                <Dropdown
                  value={selectedPage}
                  onChange={(e: DropdownChangeEvent) => {
                    setSelectedPage(e.value);
                    navigate(e.value.code);
                  }}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a Landing Page"
                  className="w-full md:w-14rem"
                />
              </div>
            </div>
            <Button
              label="Remove Bar"
              icon="pi pi-times"
              size="small"
              outlined
              onClick={removeBar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
