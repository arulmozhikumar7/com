import React, { useState } from "react";

// Modal component
const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-xl p-8 bg-white rounded-lg">
        <div onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="absolute w-6 h-6 cursor-pointer top-2 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="mb-4 text-2xl font-bold">Job Description</h2>
        <ul className="pl-6 mb-4 list-disc">
          <li>Develop new components based on design specs.</li>
          <li>Work independently and write maintainable code.</li>
          <li>
            Understand existing code and suggest optimization in terms of
            functionality and performance.
          </li>
          <li>
            Work on client frameworks for caching and develop reusable
            components.
          </li>
        </ul>
        <p className="mb-4 text-sm text-gray-500">
          Please note that we have requirements for this role in Chennai, Salem,
          Coimbatore, Tirunelveli, and Madurai.
        </p>
        {/* Add your apply button or form here */}
        <button
          onClick={onClose}
          className="block w-full h-12 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

// Your main component
const Openings = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pb-28">
        <h1 className="text-5xl font-bold text-center text-theme-blue">
          Current Openings
        </h1>
        <p className="mb-12 text-lg font-light text-center text-gray-400">
          Some opportunities for you to explore
        </p>
        <div className="grid grid-rows-3 gap-8 px-10 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <div key={index}>
              <div className="transition duration-500 transform bg-white border shadow-2xl group rounded-2xl border-light-theme-purple">
                <img
                  src={item.imageUrl}
                  alt="Service"
                  className="w-full rounded-t-2xl"
                />
                <h2 className="text-xl text-center md:text-sm lg:text-xl text-theme-blue py-7 rounded-b-2xl">
                  {item.title}
                </h2>
                <button
                  onClick={openModal}
                  className="w-full h-16 text-white bg-theme-purple rounded-b-2xl hover:bg-dark-theme-purple"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Openings;
