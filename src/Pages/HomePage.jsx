import React from "react";

import HeroPage from "./HeroPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Skills from "./Skills";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <Skills />
      <ContactPage />
    </div>
  );
};

export default HomePage;
