import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="relative  body-font">
      <motion.div
        className="container px-5 py-24 mx-auto "
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
          className="flex flex-col w-full mb-12 text-center"
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
          <h1 className="mb-4 text-2xl font-medium sm:text-3xl title-font ">
            Contact
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to contact me. Lets make something awesome.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto lg:w-1/2 md:w-2/3"
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
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label for="name" className="text-sm leading-7 ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-1 text-base leading-8 bg-opacity-50 border rounded outline-none"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label for="email" className="text-sm leading-7 ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1 text-base leading-8 bg-opacity-50 border rounded outline-none "
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label for="message" className="text-sm leading-7 ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-32 px-3 py-1 text-base leading-6 bg-opacity-50 border rounded outline-none resize-none "
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button className="flex px-8 py-2 mx-auto text-lg btn-primary btn">
                Submit
              </button>
            </div>
            <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
              <a href="mailto:arulmozhikumar7@gmail.com">
                arulmozhikumar7@gmail.com
              </a>
              <p className="my-5 leading-normal">
                Chennai
                <br />
                Tamilnadu , India
              </p>
              <span className="inline-flex">
                <a className="">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 ">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 ">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
