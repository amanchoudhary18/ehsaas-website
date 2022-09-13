import React from "react";
// import "./Home.css";
import ContactUs from "../components/ContactUs";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Videos from "../components/Videos";
import AboutUs from "../components/aboutUs";
const Home = ({ auth }) => { {  return (
    <div>
      <Intro />
      <Events auth={auth} auth={auth} />
      <Videos />
      <ContactUs />
      <Footer />
      {/* <AboutUs /> */}
    </div>
  );
};
export default Home;