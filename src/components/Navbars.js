import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/header_logo.png";
import { IonIcon } from "react-ion-icon";
import { Link } from "react-router-dom";
import "./Navbars.css";
import { Outlet, useNavigate } from "react-router-dom";
const Navbars = () => {
  const navigate = useNavigate();
  const handleNavigateButton = (e) => {
    const target = e.target.getAttribute("href");
    navigate(`/${target}`);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xl"
        bg="black"
        variant="dark"
        sticky="top"
      >
        <Container style={{ padddingLeft: "0" }}>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="200"
              height="100"
              alt=""
              style={{ padddingLeft: "0" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" me-auto pb-3" style={{ fontSize: "27px" }}>
              <Nav.Link href="#home" onClick={handleNavigateButton}>
                Home
              </Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#videos">Achievements</Nav.Link>
              <Nav.Link href="#pricing">Videos</Nav.Link>

              <NavDropdown title="More" id="basic-nav-dropdown">
                <Link to="/exebody" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.1">
                    Executive Body
                  </NavDropdown.Item>
                </Link>

                <Link to="/calendar" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.2">
                    Event Calender
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">About-us</NavDropdown.Item>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
                </Link>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.5">
                    Sign Up
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <h3>
                  <IonIcon name="logo-youtube" />
                </h3>
              </Nav.Link>
              <Nav.Link href="#deets">
                <h3>
                  <IonIcon name="mail-outline" />
                </h3>
              </Nav.Link>
              <Nav.Link href="#deets">
                <h3>
                  <IonIcon name="logo-facebook" />
                </h3>
              </Nav.Link>
              <Nav.Link href="#deets">
                <h3>
                  <IonIcon name="logo-instagram" />
                </h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Navbars;
