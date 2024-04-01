import React from "react";
import { motion } from "framer-motion";
const Data = {
  header1: "Growing your business",
  header2: "is our top priority",
  para: "We provide developers & designers using latest technologies to help you scale up your business.",
  button1: "See our work",
  button2: "Discuss with us",
  img: "/hero1.jpg",
};
const Hero = () => {
  return (
    <>
      <section class=" body-font bg-base-200">
        <motion.div
          class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center"
          initial={{
            opacity: 0,

            y: 50,
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
          <motion.div
            class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            initial={{
              opacity: 0,

              y: 50,
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
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
              {Data.header1}
              <br class="hidden lg:inline-block" />
              {Data.header2}
            </h1>
            <p class="mb-8 leading-relaxed">{Data.para}</p>
            <div class="flex justify-center">
              <button class="inline-flex   border-0  focus:outline-none hover: rounded text-sm btn btn-primary">
                {Data.button1}
              </button>
              <button class="ml-4 inline-flex   border-0  focus:outline-none hover: rounded text-sm btn btn-primary">
                {Data.button2}
              </button>
            </div>
          </motion.div>
          <motion.div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            initial={{
              opacity: 0,

              y: 50,
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
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Data.img}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
