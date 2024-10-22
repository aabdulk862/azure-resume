import React from "react";
import { Navbar, Nav, Container, NavbarToggle, NavbarCollapse} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#212e3a", marginBottom: "1.5rem" }}
      expand="lg"
    >
      <Container style={{ fontSize: "1.2rem" }}>
        <NavbarToggle
          aria-controls="basic-navbar-nav"
          style={{
            borderColor: "transparent", // Remove the default border
          }}
        >
          {/* Override the default toggle icon with a white SVG hamburger */}
          <span
            style={{
              display: "block",
              width: "30px",
              height: "30px",
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
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
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;

