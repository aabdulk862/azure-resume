import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#212e3a", marginBottom:"1rem"}} expand="lg">
      <Container style={{ fontSize: "1.2rem" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-white">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/employment">
              <Nav.Link className="text-white">Employment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/education">
              <Nav.Link className="text-white">Education</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link className="text-white">Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="text-white">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/references">
              <Nav.Link className="text-white">References</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
