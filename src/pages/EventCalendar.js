import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/header_logo.png";
import { IonIcon } from "react-ion-icon";
import { Link } from "react-router-dom";
import RevoCalendar from "revo-calendar";

const EventCalendar = () => {
  var events = [
    {
      name: "Buyout",
      date: Date.now(),
      allDay: true,
    },
    {
      name: "Reservation",
      date: 1594422992000,
      extra: {
        icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
        text: "7 People",
      },
    },
  ];
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

      <RevoCalendar
        className="calendar"
        style={{
          height: "100%",
          margin: "30px auto",
        }}
        events={events}
        primaryColor={"#1E1E25"}
        secondaryColor={"#ECECF1"}
        textColor={"black"}
      />
    </div>
  );
};

export default EventCalendar;
