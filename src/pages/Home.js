import React from "react";
import ContactUs from "../components/ContactUs";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Videos from "../components/Videos";

const Home = ({ auth }) => {
  return (
    <div>
      <Intro />
      <Events auth={auth} />
      <Videos />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
