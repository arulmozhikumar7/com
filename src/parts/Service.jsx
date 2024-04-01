/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container pt-20 mx-auto pb-28">
        <motion.div
          initial={{
            opacity: 0,

            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          {" "}
          <h1 className="text-5xl font-bold text-center text-theme-blue">
            Our Service
          </h1>
          <p className="mb-12 text-lg font-light text-center text-gray-400">
            We are ready to scale up your business with our great service.
          </p>
        </motion.div>
        <div className="grid grid-rows-3 gap-8 px-10 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,

                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <div className="transition duration-500 transform bg-white border shadow-2xl group rounded-2xl border-light-theme-purple hover:scale-105">
                <img
                  src={item.imageUrl}
                  alt="Service"
                  className="w-full rounded-t-2xl"
                />
                <h2 className="text-xl text-center text-theme-blue py-7 rounded-b-2xl">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
