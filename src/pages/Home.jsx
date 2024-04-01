import React from "react";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Service from "../components/Service";
import { useState } from "react";
const Home = () => {
  const [currentTheme, setCurrentTheme] = useState("lofi");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lofi" ? "black" : "lofi");
  };
  return (
    <div data-theme={currentTheme}>
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <div id="Home">
        <Hero />
      </div>
      <div>
        <Service />
      </div>
    </div>
  );
};

export default Home;
