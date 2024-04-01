/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import * as emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "@elements/Form";
import Button from "@elements/button";

export default function DiscussForm(props) {
  const { data, resetForm } = props;

  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "Racxstudio",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_h4gtndg",
          "template_a9tvs7a",
          templateParams,
          "user_csqIxzN5mKsl1yw4ffJzV"
        )
        .then(
          () => {
            toast.success("Success! we'll get back to you soon. Thank you!");
            resetForm();
          },
          (error) => {
            toast.error(error);
          }
        );
    } else {
      toast.error("Please fill out the blank form.");
    }
  };

  return (
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
      className="container flex flex-col justify-center mx-auto mt-10"
    >
      <h1 className="text-5xl font-bold text-center text-theme-blue">
        Lets Discuss
      </h1>

      <p className="mb-12 text-lg font-light text-center text-gray-400">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Please fill out the form below to discuss your project and we'll get
        back to you in less than 24 hours.
      </p>

      <div className="flex flex-col">
        <div className="flex flex-col mx-auto sm:flex-row">
          <Form
            id="name"
            name="name"
            type="text"
            value={data.name}
            placeholder="Your name"
            className=""
            onChange={props.onChange}
          />
          <Form
            id="company"
            name="company"
            type="text"
            value={data.company}
            placeholder="Your company"
            className=""
            onChange={props.onChange}
          />
        </div>

        <div className="flex flex-col mx-auto sm:flex-row">
          <Form
            id="email"
            name="email"
            type="email"
            value={data.email}
            placeholder="Your email address"
            className=""
            onChange={props.onChange}
          />
          <Form
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            placeholder="Your contact number"
            className=""
            onChange={props.onChange}
          />
        </div>

        <div className="mx-auto">
          <Form
            id="projectIdea"
            name="projectIdea"
            type="textarea"
            value={data.projectIdea}
            placeholder="Explain about your project idea"
            className=""
            onChange={props.onChange}
          />
        </div>

        <Button
          className="px-12 py-3 mx-auto mt-5 text-xl text-white transition duration-200 border-2 border-purple-800 rounded-full bg-theme-purple border-theme-purple hover:bg-dark-theme-purple focus:outline-none"
          type="button"
          onClick={submitEmail}
        >
          Submit
        </Button>
      </div>

      <ToastContainer />
    </motion.div>
  );
}
