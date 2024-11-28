import React from "react";

const Header = () => {
  return (
    <div className="flex align-items-center justify-content-between px-3 md:px-5 lg:px-8 py-1 w-full">
      <div className="flex align-items-center gap-1">
        <img src="images/Logo.png" alt="Logo" className="w-4rem md:w-8rem" />
        <div className="text-center">
          <p className="text-3xl md:text-5xl custom-primary-color font-bold font-ga-maamli">
            SUPERFIT
          </p>
          <p className="hidden md:flex font-bold text-gray-700">
            STAY FIT FOREVER
          </p>
        </div>
      </div>
      <div className="hidden lg:flex align-items-center gap-4">
        <div className="flex gap-2 align-items-center">
          <i className="pi pi-comments text-2xl custom-primary-color"></i>
          <p>+61 420 888 999</p>
        </div>
        <div className="flex gap-2 align-items-center">
          <i className="pi pi-envelope text-2xl custom-primary-color"></i>
          <p>sjeewan53@gmail.com</p>
        </div>
        <div className="p-2 border-left-1 border-right-1 border-gray-400">
          <i className="pi pi-facebook text-3xl custom-primary-color"></i>
        </div>
        <div className="p-2 border-left-1 border-right-1 border-gray-400">
          <i className="pi pi-twitter text-3xl custom-primary-color"></i>
        </div>
        <div className="p-2 border-left-1 border-right-1 border-gray-400">
          <i className="pi pi-google text-3xl custom-primary-color"></i>
        </div>
        <div className="p-2 border-left-1 border-right-1 border-gray-400">
          <i className="pi pi-linkedin text-3xl custom-primary-color"></i>
        </div>
      </div>
      <div className="flex gap-2 align-items-center lg:hidden">
        <p className="text-lg md:text-2xl text-gray-600">MENU</p>
        <i className="pi pi-bars text-xl md:text-3xl text-gray-600"></i>
      </div>
    </div>
  );
};

export default Header;
