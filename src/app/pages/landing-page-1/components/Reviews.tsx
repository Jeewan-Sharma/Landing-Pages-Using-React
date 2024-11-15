import React from "react";
import ImageSlider from "../../../components/ImageSlider";
import { Rating } from "primereact/rating";
import "./styles.scss";

// Define a TypeScript interface for the item
interface ReviewData {
  id: number;
  name: string;
  review: string;
  imageUrl: string;
  lostWeight: string;
}

// Example data that will be used for looping
const reviewData: ReviewData[] = [
  {
    id: 1,
    name: "Rose Brooks",
    review:
      "Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    imageUrl: "/images/reviews/review1.jpg",
    lostWeight: "52",
  },
  {
    id: 2,
    name: "Anne Simpson",
    review:
      "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imageUrl: "/images/reviews/review2.jpg",
    lostWeight: "63",
  },
  {
    id: 3,
    name: "Roy Martinez",
    review:
      "Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    imageUrl: "/images/reviews/review3.jpg",
    lostWeight: "29",
  },
  {
    id: 4,
    name: "Evelyn Alexander",
    review:
      "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imageUrl: "/images/reviews/review4.jpg",
    lostWeight: "69",
  },
  {
    id: 5,
    name: "Hunter Reeves",
    review:
      "Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    imageUrl: "/images/reviews/review5.jpg",
    lostWeight: "54",
  },
  {
    id: 6,
    name: "Nicole Holmes",
    review:
      "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    imageUrl: "/images/reviews/review6.jpg",
    lostWeight: "75",
  },
];

const reviews = () => {
  return (
    <div className="py-7 px-8">
      <div className="flex pb-4 border-bottom-1 border-custom-primary-color">
        <div className="w-7">
          <p className="font-semibold text-4xl mt-4 custom-primary-color">
            Weight Loss Success Stories
          </p>
          <p className="text-gray-900 text-2xl mt-2">
            Get inspired by Julie B. and her amazing, real-life success story
          </p>
          <p className="mt-4 text-xl">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <p className="mt-4 text-xl">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
        <div className="w-5">
          <ImageSlider />
        </div>
      </div>
      <div className="flex py-7 flex-wrap">
        {reviewData.map((item) => {
          return (
            <div className="flex w-4 gap-3 p-2">
              <div className="w-6rem h-6rem border-1 border-circle border-custom-primary-color flex justify-content-center align-items-center">
                <img
                  src={item.imageUrl}
                  alt="review"
                  className="border-circle h-full w-full"
                />
              </div>
              <div className="w-9">
                <p className="text-xl">{item.review}</p>
                <p className="font-bold text-xl mt-4">
                  {item.name}
                  <span className="custom-primary-color font-normal text-xl">
                    &nbsp;(lost {item.lostWeight} lbs)
                  </span>
                </p>
                <Rating
                  value={5}
                  readOnly
                  cancel={false}
                  className="mt-2 text-yellow-800"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default reviews;
