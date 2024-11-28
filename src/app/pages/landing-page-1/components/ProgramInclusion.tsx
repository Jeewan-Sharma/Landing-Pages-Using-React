import React from "react";

const ProgramInclusion = () => {
  return (
    <div
      className="px-3 md:px-5 lg:px-8 py-8"
      style={{ background: "#EFFBF8" }}
    >
      <p className="text-5xl lg:text-6xl font-light text-center">
        What Does Program Include?
      </p>
      <p className="text-2xl lg:text-4xl font-light text-center mt-2 text-gray-900">
        From healthy diet plans to body measuring, we will tailor a custom diet
        plan for you to follow
      </p>
      <div className="flex flex-wrap mt-5">
        <div className="w-full md:w-6 lg:w-3">
          <div className="h-full p-5 flex flex-column align-items-center">
            <img
              src="/images/meal_plans.svg"
              alt="Meal Plans"
              className="w-auto"
            />
            <p className="font-bold text-2xl text-center mt-4">
              Healthy Meal Plans
            </p>
            <p className="mt-4 text-lg text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod temp.
            </p>
          </div>
        </div>
        <div className="w-full md:w-6 lg:w-3">
          <div className="h-full p-5 flex flex-column align-items-center">
            <img
              src="/images/diagnosis.svg"
              alt="Diagnosis"
              className="w-auto"
            />
            <p className="font-bold text-2xl text-center mt-4">
              Healthy Meal Plans
            </p>
            <p className="mt-4 text-lg text-center">
              Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt.
            </p>
          </div>
        </div>
        <div className="w-full md:w-6 lg:w-3">
          <div className="h-full p-5 flex flex-column align-items-center">
            <img
              src="/images/weight_controlling.svg"
              alt="Weight"
              className="w-auto"
            />
            <p className="font-bold text-2xl text-center mt-4">
              Healthy Meal Plans
            </p>
            <p className="mt-4 text-lg text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod temp.
            </p>
          </div>
        </div>
        <div className="w-full md:w-6 lg:w-3">
          <div className="h-full p-5 flex flex-column align-items-center">
            <img
              src="/images/body_measuring.svg"
              alt="Body"
              className="w-auto"
            />
            <p className="font-bold text-2xl text-center mt-4">
              Healthy Meal Plans
            </p>
            <p className="mt-4 text-lg text-center">
              Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramInclusion;
