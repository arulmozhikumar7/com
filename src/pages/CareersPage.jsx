import React, { useEffect } from "react";

import Header from "@parts/Header";
import HeroCareer from "@parts/HeroCareer";

import Footer from "@parts/Footer";

import Data from "@json/landingPage.json";

import Openings from "@parts/Openings";

const AboutPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <HeroCareer data={Data.careers} />
      <Openings data={Data.service} />
      <Footer />
    </>
  );
};

export default AboutPage;
