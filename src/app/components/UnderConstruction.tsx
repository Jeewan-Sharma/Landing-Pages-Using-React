import React from "react";

const UnderConstruction = () => {
  return (
    <div
      className="p-4 flex flex-column align-items-center"
      style={{ background: "#EFFBF8" }}
    >
      <div className="w-8">
        <img src="images/under_construction.png" alt="" />
      </div>
      <p className="text-center text-teal-700 text-3xl font-bold">
        "The website is under Development, Will be ready soon"
      </p>
      <p className="text-7xl text-center text-orange-500 font-bold font-ga-maamli">
        "Cheers!"
      </p>
    </div>
  );
};

export default UnderConstruction;
