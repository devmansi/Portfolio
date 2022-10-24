import React from "react";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";

export default function Home () {
  return (
    <div className="banner-container" id="home">
      <section className="custom-section text-light p-5 mt-5 text-center">
        <div className="d-flex flex-column container">
          <div className="d-flex align-items-center flex-column justify-content-between">
            <div>
              <h4>
                <span className="d-flex">
                  Hi, my name is <br />
                </span>
                <span className="name">Mansi Goyal</span>
              </h4>
              <Typewriter
                options={{
                  loop: true,
                  delay: 70,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Im a Programmer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Im a Front-End Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Im a Web Designer")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
              <div className="d-flex justify-content-center">
                <Button
                  variant="d-flex my-3 fw-bold"
                  href="#contact"
                  className="hire mx-2"
                >
                  Hire me
                </Button>
                <a href="https://drive.google.com/file/d/1ukCpLygDx9H7wfCu5vN1i5Q8iyLsKAa6/view?usp=sharing" rel="noreferrer" target="_blank">
                  <Button
                    variant="outline-primary text-white d-flex my-3"
                    className="cv"
                  >
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};