/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import heroPortfolio from "@assets/images/portfolioHero.png";

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="flex flex-col w-full px-5 mb-5 sm:w-1/2 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <h1 className="mb-5 text-6xl font-bold leading-tight text-theme-blue">
          Portfolio
        </h1>
        <p className="text-xl font-light leading-relaxed text-gray-400">
          As a Software House that designs and develops website, mobile apps,
          and UI/UX design, we have been trusted by our clients from all around
          the world.
        </p>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <img src={heroPortfolio} alt="Hero" />
      </div>
    </section>
  );
}
