import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-center footer py-3">
      <div className="line"></div>
      <div className="my-5 message">
        <p style={{ fontFamily: "monospace" }}>
          <i className="px-3 fa fa-copyright" aria-hidden="true"></i>
          Copyright <span>Ehsaas Dramatic Society</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
