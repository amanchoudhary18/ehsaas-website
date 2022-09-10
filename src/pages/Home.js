import React from "react";
import Events from "../components/Events";
import Intro from "../components/Intro";
import Videos from "../components/Videos";

const Home = ({ auth }) => {
  return (
    <div>
      <Intro />
      <Events auth={auth} />
      <Videos />
    </div>
  );
};

export default Home;
