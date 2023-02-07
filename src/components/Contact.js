import React from 'react';
import "../styling/Contact.css";
import tele from "../images/telegramicon.png"

const Contact = () => {
  return (
    <>
      <div className="contact">
      <img src={tele} alt="" />
        <a href="https://www.linkedin.com/in/vikasthakurr/">Get Me On Linkedin</a>
         
      </div>
    </>
  )
}

export default Contact;