import { Button } from "primereact/button";
import React from "react";
import { Divider } from "primereact/divider";

const Footer = () => {
  return (
    <div className="px-3 md:px-5 lg:px-8">
      <div className="pt-8 pb-4 flex flex-wrap row-gap-5 justify-content-between">
        <div className="w-full lg:w-5">
          <p className="custom-primary-color text-2xl">
            3 Important Steps to Lose Healthy and Durable Your Weight
          </p>
          <p className="mt-5 font-bold text-lg text-grey-700">
            Get In Shape Faster – Live Your Happy Life!
          </p>
          <p className="mt-2 text-lg">
            An easy to follow 3-step program to shed pounds, boost energy, and
            increase longevity, on which men lose an average of 15 lbs., and
            women 10 lbs., in just one month.
          </p>
          <Button
            icon="pi pi-angle-double-right"
            label="Start Your Journey Today"
            className="custom-outlined-primary-to-secondary-button mt-5"
            outlined
            rounded
            size="large"
          />
        </div>
        <div className="w-full lg:w-6 flex flex-wrap row-gap-4">
          <div className="w-full md:w-4 px-2">
            <p className="font-bold custom-primary-color text-lg">SUPPORT</p>
            <div className="mt-2 p-3 hover-row">
              <p className="text-lg">Home</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Features</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Demo Pages</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">FAQ</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Blog</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
          </div>
          <div className="px-2 w-full md:w-4">
            <p className="font-bold custom-primary-color text-lg">RESOURCES</p>
            <div className="mt-2 p-3 hover-row">
              <p className="text-lg">Home Page</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Blog</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Features</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">FAQ</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Landing Pages</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
          </div>
          <div className="w-full md:w-4 px-2">
            <p className="font-bold custom-primary-color text-lg">ABOUT</p>
            <div className="mt-2 p-3 hover-row">
              <p className="text-lg">Home</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Features</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Demo Pages</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">FAQ</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
            <div className="p-3 hover-row">
              <p className="text-lg">Blog</p>
              <i className="pi pi-arrow-right custom-primary-color font-bold"></i>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-column md:flex-row row-gap-3 text-center md:text-left justify-content-between py-5">
        <p className="text-lg">
          Copyright © 2024{" "}
          <a
            href="https://jeewansharma.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl custom-primary-color underline"
          >
            Jeewan Sharma
          </a>
          .&nbsp;Developed with React.
        </p>
        <div className="flex justify-content-center md:justify-content-end gap-3 custom-primary-color ">
          <i className="pi pi-facebook text-2xl"></i>
          <i className="pi pi-twitter text-2xl"></i>
          <i className="pi pi-google text-2xl"></i>
          <i className="pi pi-linkedin text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
