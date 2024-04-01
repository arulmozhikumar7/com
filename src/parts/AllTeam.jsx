/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

export default function AllTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto">
      <div className="grid grid-cols-2 mx-16 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 justify-items-center">
        {data.map((item, index) => (
          <div>
            <div className="flex flex-col justify-center transition duration-500 transform border shadow-xl w-44 h-60 sm:w-56 sm:h-72 rounded-xl border-light-theme-purple hover:scale-105">
              <div className="flex justify-center xl:mb-5">
                <img
                  src={item.imageUrl}
                  alt="Team Member"
                  className="flex w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-xl text-center text-theme-blue">
                {item.name}
              </h2>
              <p className="mb-3 font-light text-center text-gray-400">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
