import React from 'react'
import "../styling/Work.css";
import img4 from "../images/salon.jpg";
import img1 from "../images/risc.jpg";
import img2 from "../images/order.jpg";
import img3 from "../images/music.jpg";

const Work = () => {
   return (
      <>
         <div className="work-container" id='work'>
            <h2 className="heading">My Work</h2>
            <div className="work">

               <div className="card">
                  <div className="img">
                     <img className="im" src={img1} alt="" />
                  </div>
                  <div className="text">
                     <h2 className="title-1">LPU RISC</h2><br />
                     <p>Department of Robotics has offered me their website for developement from scratch. in this project i have used fundamental web technology like HTML,CSS and JavaScript.this website contains some amazing animation.</p>
                  </div>
               </div>
               <a href="https://github.com/vikasthakurr/LpuRISC.git" target="_blank" className="project-btn">View Project</a>
            </div>


            <div className="work">
               <div className="card">
                  <div className="img">
                     <img className="im" src={img4} alt="" />
                  </div>
                  <div className="text">
                     <h2 className="title-1">Salon Booking</h2><br />
                     <p>I developed a salon booking website to solve a real life problem i.e to make people easier to book their saloon booking from their home as per thier comfort. In this website i have used HTML,CSS and JavaScript</p>
                  </div>
               </div>
               <a href="https://vikasthakurr.github.io/Bookmysallonbyvikas/" target="_blank" className="project-btn">View Project</a>
            </div>


            <div className="work">
               <div className="card">
                  <div className="img">
                     <img className="im" src={img2} alt="" />
                  </div>
                  <div className="text">
                     <h2 className="title-1">Paytm Clone</h2><br />
                     <p>I developed a clone of payment website PAYTM it have all facility of paytm as per their front end part like login page and signup page and profile maintinence. In this website i have used HTML,CSS and JavaScript</p>
                  </div>
               </div>
               <a href="https://vikasthakurr.github.io/paytm-clone/" target="_blank" className="project-btn">View Project</a>
            </div>



            <div className="work">
               <div className="card">
                  <div className="img">
                     <img className="im" src={img3} alt="" />
                  </div>
                  <div className="text">
                     <h2 className="title-1">Music Player</h2><br />
                     <p>I developed a music player website in which user can add their song and play it contains play pause and resume button to maintain the functionality. In this website I have used python for smooth and better experience. </p>
                  </div>
               </div>
               <a href="https://github.com/vikasthakurr/musicplayer.git" target="_blank" className="project-btn">View Project</a>
            </div>

         </div>






      </>
   )
}

export default Work