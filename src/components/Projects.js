import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaGlobe } from "react-icons/fa"

import projectsData from "../projectsData";

export default function Project () {
  return (
    <div data-aos="fade-down" className="projects-container" id="projects">
      <br />
      <h1 className="text-center text-white my-5">Projects</h1>
      <div
        className="container-fluid d-flex flex-wrap justify-content-center p-5 my-5"
        style={{ gap: "15px" }}
      >
        {
          projectsData.map(({ id, title, description, github, website , images }) => {
            return (
              <div data-aos="fade-down" key={id}>
                <Card className="shadow" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={images[0]} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className="links">
                      <a href={website} target="_blank" rel="noreferrer"><FaGlobe size={24} color={"black"}/></a>
                      <a href={github} target="_blank" rel="noreferrer"><FaGithub size={24} color={"black"}/></a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        }
        <div className="text-center m-5">
          <h5 className="text-white">
            More Projects on my{" "}
            <a
              className="text-warning"
              rel="noreferrer"
              target={"_blank"}
              href="https://github.com/devmansi?tab=repositories"
            >
              GitHub
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
