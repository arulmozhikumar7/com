import React from "react";
import { motion } from "framer-motion";
const Projects = () => {
  const projectData = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg",
      title: "Pizza Ordering Web App",
      description:
        "A MERN stack web app for ordering pizza with user authentication, inventory management, and payment.",
      buttonText: "Live Demo",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-photo/laptop-with-digital-splashes-mails_882954-29537.jpg",
      title: "Newsletter Prototype",
      description:
        "A MERN stack web app with payment integration and email subscription for subscribing to, and managing publications.",
      buttonText: "Live Demo",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-vector/tiny-people-preparing-invoice-computer-isolated-flat-illustration_74855-11116.jpg",
      title: "Expense Tracker",
      description:
        "A MERN stack web app for tracking personal expenses, viewing them in a chart, and exporting them in CSV format.",
      buttonText: "Live Demo",
    },
  ];

  return (
    <>
      <motion.div
        className="flex items-center justify-center text-center bg-base-200"
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
        <h2 className="p-2 text-3xl font-semibold">Projects</h2>
      </motion.div>
      <section className="body-font bg-base-200">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Map over the project data array */}
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="p-4 md:w-1/3"
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
                <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg">
                  <img
                    className="object-cover object-center w-full lg:h-48 md:h-36"
                    src={project.imageUrl}
                    alt="project"
                  />
                  <div className="p-6">
                    <h2 className="mb-1 text-xs font-medium tracking-widest title-font">
                      MERN
                    </h2>
                    <h1 className="mb-3 text-lg font-medium title-font">
                      {project.title}
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center">
                      <a className="inline-flex items-center md:mb-2 lg:mb-0 btn btn-primary">
                        {project.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
