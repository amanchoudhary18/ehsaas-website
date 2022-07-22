import React from "react";
import Events from "../components/Events";
import Intro from "../components/Intro";
import Videos from "../components/Videos";
import Navbars from "../components/Navbars";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Intro />
      <Events />
      <Videos />
    </div>
  );
};

export default Home;
