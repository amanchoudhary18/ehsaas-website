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
      <div className="facAd">
        <TeamCard />
      </div>
  );
};

export default Exebody;
