import React from "react";
import { motion } from "framer-motion";
const data = [
  {
    title: "Web Development",
    imageUrl: "assets/images/Web.png",
  },
  {
    title: "Mobile Development",
    imageUrl: "assets/images/Mobile.png",
  },
  {
    title: "UI/UX Design",
    imageUrl: "assets/images/Design.png",
  },
];
const Service = () => {
  return (
    <div className="bg-base-200">
      <div className="container pt-20 mx-auto pb-28">
        <h1 className="text-5xl font-bold text-center text-theme-blue">
          Our Service
        </h1>

        <p className="mb-12 text-lg font-light text-center text-gray-400">
          We are ready to scale up your business with our great service.
        </p>

        <div className="grid grid-rows-3 gap-8 px-10 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,

                y: window.innerWidth > 1024 ? 300 : 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: window.innerWidth > 1024 ? 0.5 * (index + 1) : 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <div className="transition duration-500 transform bg-white border shadow-2xl group rounded-2xl hover:scale-105">
                <img
                  src={item.imageUrl}
                  alt="Service"
                  className="w-full rounded-t-2xl"
                />
                <h2 className="text-xl text-center text-black py-7 rounded-b-2xl">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
