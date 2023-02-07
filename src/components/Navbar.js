import React from "react";
import "../styling/Navbar.css"
import cv from "../images/Vikas_resume_one.pdf";

const Navbar = () => {
  return (
    <>
      <div className="navbar" id="home">
        <div className="name-main">
          <h1>I am Vikas Thakur</h1>

          <a href={cv} target="_blank" className="btn">Download Resume</a>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#me">Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>

  );

}
export default Navbar;