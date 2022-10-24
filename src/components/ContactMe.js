import React from "react";

// icons
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contact () {
  return (
    <div data-aos="fade-down" className="contact-container" id="contact">
      <section>
        <div className="contact d-flex justify-content-center">
          <h1>Contact</h1>
        </div>
        <div
          className="d-flex flex-column flex-md-row mt-5 align-items-center justify-content-around"
        >
          <p className="desc  p-2 col-md-6 col-sm-4 col-10">
            I hope you liked my work. I'll be happy if you send me your suggestions,
            comments, criticisms & <strong>job offers</strong> .
          </p>
          <ul className="info mb-5 shadow">
            <li>
              <FaUserAlt />
              Mansi Goyal
            </li>
            <li>
              <MdEmail />
              <a rel="noopener noreferrer" href="mailto:mgmansigoel096@gmail.com">
                mgmansigoel096@gmail.com
              </a>
            </li>
            <li>
              <BsLinkedin />
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://www.linkedin.com/in/mansigoel096/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <BsGithub />
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://github.com/devmansi"
              >
                devmansi
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

