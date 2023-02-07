import React from 'react';
import "../styling/About.css";
import pics from "../components/7.png";
import pratyush from "../components/pratyush.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="title">About Us</h1>
        <p className="description">
          A web developer team lead by Vikas Thakur is a group of talented and dedicated individuals who are committed to delivering exceptional web development solutions to their clients. With Vikas Thakur as the team leader, this group of developers possesses a wealth of experience and expertise in the field of web development.Under the guidance of Vikas Thakur, the team works tirelessly to stay up-to-date with the latest advancements in web development technologies and design concepts. This allows them to provide their clients with innovative and cutting-edge solutions that are both functional and visually appealing.Whether it's a small website or a complex web application, this team of developers strives to deliver high-quality results that meet the specific needs of each client. Their commitment to excellence is evident in their attention to detail and their ability to understand their clients' requirements.The team lead by Vikas Thakur also places a strong emphasis on communication and collaboration. By working closely with their clients, they are able to ensure that their projects are completed on time, within budget and to the highest standards of quality.
        </p>
        <div className="team">
          <h2 className="team-title">Our Team</h2>
        </div>
        <div className="member">
          <div className="team-member">
            <img src={pics} alt="Profile 1" />
            <h3>Vikas Thakur</h3>
            <p>React Js Developer <br />Team Lead</p>
            
          </div>
          <div className="team-member">
            <img src={pratyush} alt="Profile 2" />
            <h3>Pratyush Mishra</h3>
            <p>React Js Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;