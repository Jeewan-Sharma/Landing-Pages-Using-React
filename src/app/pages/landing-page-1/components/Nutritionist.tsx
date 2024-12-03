import React from "react";

interface INutritionist {
  id: number;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

const NutritionistData: INutritionist[] = [
  {
    id: 1,
    name: "Dr. Johnathan Smith",
    position: "CEO / CO-FOUNDER",
    description:
      "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    imageUrl: "/images/nutritionists/profile1.jpg",
  },
  {
    id: 2,
    name: "Dr. Johnathan Smith",
    position: "CEO / CO-FOUNDER",
    description:
      "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    imageUrl: "/images/nutritionists/profile2.jpg",
  },
  {
    id: 3,
    name: "Dr. Johnathan Smith",
    position: "CEO / CO-FOUNDER",
    description:
      "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    imageUrl: "/images/nutritionists/profile3.jpg",
  },
  {
    id: 4,
    name: "Dr. Johnathan Smith",
    position: "CEO / CO-FOUNDER",
    description:
      "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    imageUrl: "/images/nutritionists/profile4.jpg",
  },
];

const Nutritionist = () => {
  return (
    <div className="px-3 md:px-5 lg:px-8 py-8">
      <p className="text-5xl lg:text-6xl font-light text-center">
        Qualified Nutrition & Health Coaches
      </p>
      <p className="text-2xl lg:text-4xl font-light text-center mt-2 text-gray-900">
        Our coaches provide guidance and management in the major components of
        health, including diet and physical activity.
      </p>

      <div className="flex py-7 flex-wrap row-gap-6">
        {NutritionistData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-wrap justify-content-center w-full lg:w-6 gap-3 p-2"
            >
              <div className="w-10rem h-10rem border-1 border-circle border-custom-primary-color flex justify-content-center align-items-center">
                <img
                  src={item.imageUrl}
                  alt="review"
                  className="border-circle h-full w-full"
                />
              </div>
              <div className="col">
                <div className="flex justify-content-between align-items-center">
                  <div>
                    <p className="font-semibold text-2xl custom-primary-color">
                      {item.name}
                    </p>
                    <p className="font-bold text-lg mt-2">{item.position}</p>
                  </div>
                  <div className="flex gap-2">
                    <i className="pi pi-facebook text-2xl text-gray-400"></i>
                    <i className="pi pi-twitter text-2xl text-gray-400"></i>
                    <i className="pi pi-google text-2xl text-gray-400"></i>
                    <i className="pi pi-linkedin text-2xl text-gray-400"></i>
                  </div>
                </div>
                <p className="text-xl mt-3">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nutritionist;
