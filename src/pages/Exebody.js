import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/header_logo.png";
import { IonIcon } from "react-ion-icon";
import { Link } from "react-router-dom";
import TeamCard from "../UI/TeamCard";
import "./ExeBody.css";

const Exebody = () => {
  return (
    <div>
      <Navbar expand="xl" bg="black" variant="dark" sticky="top">
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

          <Navbar>
            <Nav className=" me-auto pb-3" style={{ fontSize: "27px" }}></Nav>
            <Nav>
              <Nav.Link style={{ fontSize: "27px" }}>
                <Link
                  to="/"
                  class="nav-item"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  <IonIcon
                    style={{ paddingTop: "10px" }}
                    name="arrow-back-outline"
                  ></IonIcon>
                  <span style={{ paddingLeft: "20px" }}>Home</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      <div className="facAd">
        <TeamCard />
      </div>
      {/* <div className="exe_K19">
        <TeamCard /> <TeamCard /> <TeamCard /> <TeamCard />
      </div>

      <div className="exe_K20">
        <TeamCard /> <TeamCard /> <TeamCard /> <TeamCard />
      </div> */}
    </div>
  );
};

export default Exebody;
