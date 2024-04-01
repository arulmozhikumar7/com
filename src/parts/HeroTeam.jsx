/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Team from "@assets/images/team.png";

export default function HeroTeam() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="flex flex-col w-full px-5 mb-5 sm:w-1/2 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <h1 className="mb-5 text-6xl font-bold leading-tight text-theme-blue">
          Our Team
        </h1>
        <p className="text-xl font-light leading-relaxed text-gray-400">
          Our team is full of passionate people and ready to make your dream
          software come true.
        </p>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <img src={Team} alt="Hero" />
      </div>
    </section>
  );
}
