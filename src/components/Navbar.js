import React from 'react';
import "../styling/Navbar.css";
import { Link } from "react-router-dom";
import resume from "../images/Vikas_resume_one.pdf";

const Navbar = () => {
  return (
    <>
      <div className="hero">

        <h1>I am  <span className="change_content">
        </span></h1>
        <a className="know" href={resume} target="_blank"><i class="fas fa-long-arrow-alt-right"></i>&nbsp;&nbsp;Download CV  </a>

        <div className="navlinks">
          <a href="https://github.com/vikasthakurr" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/vikasthakurr/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://hashnode.com/@vikasthakurr" target="_blank"><i class="fas fa-pen"></i></a>
          <a href="https://twitter.com/Vikas_thakurr" target="_blank"><i className="fa-brands fa-twitter"></i></a>
        </div>

        <div className="bottom-links">
          <i className="fa-solid fa-house">&nbsp;&nbsp;&nbsp;<span>Home</span></i>
          <Link to="/Work"><i className="fa-solid fa-code">&nbsp;&nbsp;&nbsp;<span>Work</span></i></Link>
          <Link to="/Me"><i className="fa-solid fa-user-secret">&nbsp;&nbsp;&nbsp;<span>Me</span></i></Link>
          <Link to="/Contact"><i className="fa-solid fa-phone">&nbsp;&nbsp;&nbsp;<span>Contact</span></i></Link>


        </div>
      </div>
    </>
  )
}

export default Navbar