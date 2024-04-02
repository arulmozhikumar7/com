import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ onClose, data }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    graduationYear: "",
    experienceYears: "",
    skillSet: "",
    location: "",
    resume: null,
  });

  const handleChange = (e) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Application submitted successfully");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative max-w-xl p-8 mx-5 overflow-y-auto bg-white rounded-lg md:max-h-full">
        <div onClick={onClose} className="absolute top-2 right-2">
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
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 text-2xl font-bold">Apply Now</h2>
            <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="graduationYear"
                placeholder="Year of Graduation"
                value={formData.graduationYear}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="experienceYears"
                placeholder="Years of Experience"
                value={formData.experienceYears}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="skillSet"
                placeholder="Skill Set"
                value={formData.skillSet}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Current Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <label htmlFor="resume" className="text-sm text-gray-600">
                Upload Resume
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  placeholder="Upload Resume"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="confirm"
                checked={formData.confirm}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="confirm" className="text-sm text-gray-600">
                I confirm that all information provided is true
              </label>
            </div>
            <button
              type="submit"
              className="block w-full h-12 text-center text-white rounded bg-theme-purple hover:bg-dark-theme-purple"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <>
            <h2 className="mb-4 text-2xl font-bold">{data.title}</h2>
            <ul className="pl-6 mb-4 list-disc">
              {data.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <p className="mb-4 text-sm text-gray-500">{data.note}</p>
            <button
              onClick={() => setShowForm(true)}
              className="block w-full h-12 text-center text-white rounded bg-theme-purple hover:bg-dark-theme-purple"
            >
              Apply Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Openings = ({ data }) => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const openModal = (index) => {
    setOpenModalIndex(index);
  };

  const closeModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <>
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
                    onClick={() => openModal(index)}
                    className="w-full h-16 text-white bg-theme-purple rounded-b-2xl hover:bg-dark-theme-purple"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
          {openModalIndex !== null && (
            <Modal onClose={closeModal} data={data[openModalIndex]} />
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Openings;
