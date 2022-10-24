import React from "react";

// icons
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { DiNpm } from "react-icons/di";
import {
  //SiGraphql,
  SiJavascript,
  SiMaterialui,
  SiReactrouter,
  //SiRedux,
  SiSass,
  //SiYarn,
} from "react-icons/si";

export default function Skills () {
  return (
    <div data-aos="fade-down" className="skills-container" id="skills">
      <section className="bg-light d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center">
          <h1 className="fw-bold mt-5">About Me</h1>
        </div>
        <div className="col-5 d-flex justify-content-center text-center">
          <p className="my-4 about-me">
              I am a Frontend Developer primarily working in React. I have strong background in core web technologies which has helped me understand JavaScript Frameworks (such as React etc) and CSS Frameworks with relative ease.
              I have good understanding of both theoretical and practical aspects of React, which I put to use in order to create high-quality user interfaces.
          </p>
        </div>
      </section>
      <div className="d-flex flex-md-row flex-column align-items-center justify-content-around mt-5">
        <div className="interest-container mb-5">
          <ul>
            <h4>Interests</h4>
            <div data-aos="fade-down">
              <li>Creativity</li>
              <li>Problem Solving</li>
              <li>Learning New Things</li>
              <li>Hard Working and Responsible</li>
              <li>Commitment to my responsibilities</li>
            </div>
          </ul>
        </div>
        <div
          data-aos="fade-down"
          className="skill-items mb-5 d-flex align-items-center flex-column"
        >
          <div>
            <h4 className="d-flex justify-content-center">Skills</h4>
          </div>
          <div>
            <div className="html customSkillStyle mx-2 shadow">
              <FaHtml5 />
            </div>
            <div className="css customSkillStyle mx-2 shadow">
              <FaCss3Alt />
            </div>
            <div className="js customSkillStyle mx-2 shadow">
              <SiJavascript />
            </div>
            <div className="react customSkillStyle mx-2 shadow">
              <FaReact />
            </div>
          </div>
          <div>
            {/* <div className="redux customSkillStyle mx-2 shadow">
              <SiRedux />
            </div> */}
            <div className="git customSkillStyle mx-2 shadow">
              <FaGitAlt />
            </div>
            <div className="npm customSkillStyle mx-2 shadow">
              <DiNpm />
            </div>
          </div>
          <div>
            <div className="react-router customSkillStyle mx-2 shadow">
              <SiReactrouter />
            </div>
            <div className="sass customSkillStyle mx-2 shadow">
              <SiSass />
            </div>
            <div className="bs customSkillStyle mx-2 shadow">
              <FaBootstrap />
            </div>
            <div className="mui customSkillStyle mx-2 shadow">
              <SiMaterialui />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};