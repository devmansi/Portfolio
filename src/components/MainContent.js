import React from "react";

// components
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./ContactMe";

export default function MainContent () {
  return (
    <div className="main-container">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
