import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header () {
  return (
    <div className="header-container">
      <Navbar className="shadow-md" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <div className="portfolio">
              Portfo<span>lio</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="text-light">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
