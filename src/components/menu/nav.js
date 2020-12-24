import React from "react";
import "./nav.css";
import cvFile from "../../assets/files/CV-2020.pdf";
const Nav = () => {
  return (
    <>
      <div className="navMenu">
        <a
          href="https://utkillustrations.tumblr.com/"
          target="_blank"
          rel="noreferrer"
        >
          Illustrations
        </a>

        <a
          href="https://utkillustrator.tumblr.com/about"
          target="_blank"
          rel="noreferrer"
        >
          About
        </a>
        <a href="mailto:hello@utkupadhyay.com">Hire me</a>
      </div>
    </>
  );
};
export default Nav;
