import React from "react";
import "./styles.scss";

const Recipes = () => {
  return (
    <div className="py-7 background bg-right flex gap-3 px-8">
      <div className="w-4 bg-white border-round border-bottom	p-5 border-custom-primary-color">
        <img
          src="/images/smoothie_recipes.jpg"
          alt="Smoothie"
          className="w-full"
        />
        <p className="font-bold text-2xl mt-4">Smoothie Recipes</p>
        <p className="text-gray-900 text-lg mt-2">
          For Detox and Fast Weight Loss Cleanse.
        </p>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur elitelit adipiscing elit. Sed
          nec aliquet turp. Integer luctus magna mi, vel tempus felis tempor
          ornare.
        </p>
      </div>
      <div className="w-4 bg-white border-round border-bottom	p-5 border-custom-primary-color">
        <img src="/images/lean_protein.jpg" alt="Smoothie" className="w-full" />
        <p className="font-bold text-2xl mt-4">Lean Protein & Vegetables</p>
        <p className="text-gray-900 text-lg mt-2">
          High-Volume and Low-Cal Vegetables.
        </p>
        <p className="mt-4 text-lg">
          Nulla sit amet varius risus, quis pretium ante. Nulla facilisi. Nunc
          sed ipsum nisi. Mauris eu dui porta mi porta sollicitudin. Proin eu
          sapien at libero scelerisque.
        </p>
      </div>
      <div className="w-4 bg-white border-round border-bottom	p-5 border-custom-primary-color">
        <img
          src="/images/healthy_dinners.jpg"
          alt="Smoothie"
          className="w-full"
        />
        <p className="font-bold text-2xl mt-4">Super-Easy Healthy Dinners</p>
        <p className="text-gray-900 text-lg mt-2">
          Tasty Meals That'll Help You Lose Weight.
        </p>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur elitelit adipiscing elit. Sed
          nec aliquet turp. Integer luctus magna mi, vel tempus felis tempor
          ornare.
        </p>
      </div>
    </div>
  );
};

export default Recipes;
