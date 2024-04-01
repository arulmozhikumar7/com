/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Button from "@elements/button";
import { Fade, Slide } from "react-awesome-reveal";
import BuildWebsite from "@assets/images/Startup.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w-full mt-8 lg:w-1/2 xl:pl-12 sm:pr-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight sm:text-6xl text-theme-blue">
          Growing Your Business <br />
          Is Our Calling
        </h1>

        <p className="mb-16 text-xl font-light leading-relaxed text-gray-400">
          We provide developers & designers using latest technologies to help
          you scale up your business.
        </p>

        <Button
          href="/project"
          type="link"
          className="flex items-center py-5 text-xl text-white transition duration-200 rounded-lg shadow-2xl w-71 h-18 px-14 bg-theme-purple hover:bg-dark-theme-purple"
        >
          See Our Work
          <svg
            className="ml-2 text-white w-7 h-7 animate-bounce-x"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>

      <div className="flex items-center justify-center order-first w-full pt-5 md:w-full lg:order-last lg:w-1/2">
        <img className="" src={BuildWebsite} alt="Build Website" />
      </div>
    </section>
  );
}
