import React, { useState, useEffect } from "react";
import { IonIcon } from "react-ion-icon";
import "./AboutUs.css";

const AboutUs = () => {
  const aboutus =
    "All the world's a stage, And all the men and women merely players; They have their exits and their entrances, And one man in his time plays many parts, from scripting and staging Plays to performing Mimes on stage, from making Short Movies to shouting his heart out in Nukkads and this is what fills the vein of every member of our beloved Dramatics Club. The cooperative process and methodical practice with individuals full of zeal make the Ehsaas Dramatics Club the most prestigious and rewarding cultural Club of BIT Mesra. We provide a plethora of opportunities to teach and foster theatre, creativity, and social responsibility among its members and develop the intellectual spirit to take initiative in changing perspectives. For, acting has the power to make people believe in things they know are not true.";

  const [viewmore, setViewMore] = useState(false);
  window.addEventListener("resize", (event) => {
    console.log(event.target.innerWidth);
    if (event.target.innerWidth < 550) {
      setViewMore(true);
      console.log(viewmore);
    }
    if (event.target.innerWidth > 550) {
      setViewMore(false);
      console.log(viewmore);
    }
  });
  useEffect(() => {
    if (window.innerWidth < 550) {
      setViewMore(true);
    }
  }, []);
  return (
    <div>
      <div id="aboutUs" className="container-fluid ">
        <h3 className="text-center">
          <IonIcon className="reveal fade-bottom" name="radio-outline" />
          <p className="reveal fade-bottom2">About Us</p>
        </h3>

        <div className="reveal fade-right about pt-5 ">
          {viewmore ? `${aboutus.slice(0, 355)}` : aboutus}
        </div>
      </div>
      <section className="lg_aboutus_sec"></section>
    </div>
  );
};

export default AboutUs;
