import React from "react";
import { motion } from "framer-motion";
import education from "../assets/education.png";
const Education = () => {
  return (
    <>
      <motion.div
        className="flex justify-center items-center "
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
        <h2 className="text-3xl p-3">Education</h2>
        <img src={education} alt="" className="w-8 h-8" />
      </motion.div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ml-3">
        <li>
          <motion.div
            className="timeline-middle"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.div
            className="timeline-start md:text-end mb-10"
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
            <time className="font-mono italic">2019</time>
            <div className="text-lg font-black">10ᵗʰ (SSLC)</div>
            Sri Ramana Vidalaya , Rajapalayam
          </motion.div>
          <hr />
        </li>
        <li>
          <hr />
          <motion.div
            className="timeline-middle"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.div
            className="timeline-end mb-10"
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
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-black">12ᵗʰ (HSLC)</div>
            Sri Ramana Vidalaya , Rajapalayam
          </motion.div>
          <hr />
        </li>
        <li>
          <hr />
          <motion.div
            className="timeline-middle"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.div
            className="timeline-start md:text-end mb-10"
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
            <time className="font-mono italic">2025(Expected)</time>
            <div className="text-lg font-black">
              B.E (Computer Science Engineering)
            </div>
            Velammal Engineering College , Chennai
          </motion.div>
        </li>
      </ul>
    </>
  );
};

export default Education;
