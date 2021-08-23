import React from "react";
import "./footer.css";
import logo from "./img/FooterLogo.png";
//mport { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="logo">
      <img src={logo} alt="genotechies"></img>
    </div>
    <div className="para">
      <p className="para">
        ||{" "}
        <a
          className="footer-a"
          href="https://github.com/GenoTechies"
          target="_blank"
          rel="noreferrer"
        >
          GenoTechies{" "}
        </a>{" "}
        සාමූහික ප්‍රයත්නයකි.
      </p>
    </div>
  </div>
);

export default Footer;
