import React from "react";

import Header from "@parts/Header";
import HeroCareer from "@parts/HeroCareer";

import Footer from "@parts/Footer";

import Data from "@json/landingPage.json";

import Openings from "@parts/Openings";

const CareersPage = (props) => {
  return (
    <>
      <Header {...props} />
      <HeroCareer data={Data.careers} />
      <Openings data={Data.service} />
      <Footer />
    </>
  );
};

export default CareersPage;
