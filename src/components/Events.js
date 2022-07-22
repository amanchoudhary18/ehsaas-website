import React from "react";
import { IonIcon } from "react-ion-icon";
import logo from "../Images/ehsaasredlogo.png";
import Card from "../UI/Card";

import "./Events.css";

const Events = () => {
  const events = [
    {
      image: logo,
      number: "01",
      title: "Card One",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit Obcaecati ducimus corporis harum possimus nesciunt magnam natus debitis.",
    },
    {
      image: logo,
      number: "02",
      title: "Card Two",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit Obcaecati ducimus corporis harum possimus nesciunt magnam natus debitis.",
    },
    {
      image: logo,
      number: "03",
      title: "Card Three",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit Obcaecati ducimus corporis harum possimus nesciunt magnam natus debitis.",
    },
    {
      image: logo,
      number: "04",
      title: "Card Four",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit Obcaecati ducimus corporis harum possimus nesciunt magnam natus debitis.",
    },
  ];
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  return (
    <div>
      <section
        className="bg light pt-5"
        style={{
          boxSizing: "border-box",
        }}
        id="events"
      >
        <div className="continer-fluid">
          <h3 className="text-center">
            <IonIcon className="reveal fade-bottom" name="radio-outline" />
            <p className="reveal fade-bottom2">Upcoming Events</p>
          </h3>

          <div className="wrapper reveal fade-right sm-p-5" id="card_wrapper">
            <ul className="stage">
              <li className="scene" id="card1">
                <Card
                  image={events[0].image}
                  number={events[0].number}
                  title={events[0].title}
                  content={events[0].content}
                />
              </li>
              <li className="scene" id="card2">
                <Card
                  image={events[1].image}
                  number={events[1].number}
                  title={events[1].title}
                  content={events[1].content}
                />
              </li>
              <li className="scene" id="card3">
                <Card
                  image={events[2].image}
                  number={events[2].number}
                  title={events[2].title}
                  content={events[2].content}
                />
              </li>
              <li className="scene" id="card4">
                <Card
                  image={events[3].image}
                  number={events[3].number}
                  title={events[3].title}
                  content={events[3].content}
                />
              </li>
            </ul>
          </div>
          <div className="reveal fade-right">
            <center>
              <a id="mob_card" href="#mobcard">
                <ion-icon name="clipboard"></ion-icon>
              </a>
            </center>
          </div>

          <div className="extra_event" style={{ height: "5px" }}></div>
        </div>
      </section>

      <section className="lg_video_sec"></section>
    </div>
  );
};

export default Events;
