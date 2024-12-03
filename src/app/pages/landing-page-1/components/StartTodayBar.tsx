import { Button } from "primereact/button";
import React from "react";

const StartTodayBar = () => {
  return (
    <div className="px-3 md:px-5 lg:px-8 py-8 background-custom-primary-color">
      <div className="flex flex-wrap justify-content-between py-4 button-custom row-gap-4">
        <p className="w-full lg:w-auto text-white text-2xl md:text-4xl font-bold">
          Losing Weight Today With Our Diet and Exercise Advice
        </p>
        <div className="w-full lg:w-auto flex justify-content-end">
          <Button
            icon="pi pi-angle-double-right"
            label="Start Your Journey Today"
            className="text-white"
            outlined
            rounded
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default StartTodayBar;
