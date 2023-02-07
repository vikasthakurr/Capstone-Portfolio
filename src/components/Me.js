import React from 'react';
import "../styling/Me.css";

const Me = () => {
   return (
      <div>
         <div className="background_text">
            <h1>ReadMe [Read About Me]</h1>
         </div>

         <div className="absolute mop top-10 lg:left-96 lg:top-0">
            <p className="p-8 text-base leading-7 sm:text-xl lg:text-2xl sm:leading-10 lg:leading-10">
               A passionate developer from <b>Etawah</b> 🇮🇳
               <br />
               
               ⚡ I like to code things from scratch, and enjoy bringing ideas to
               life in the browser.
               <br />
               
               🌱 My Primary purpose:
               <br />
               write code that is communicating with others.
               <br />
               code must be readable. <br />
               more declarative, less Imperative.
                              <br />I love❤️ to code in <b>JavaScript</b>.
               <br />
               
               🌱 My Primary Skills:
               <br />
               
               CPP and JavaScript.
               <br />
               React Js for Front-End Development.
               <br />

               PHP for Back-End Development.
               <br />
               📝 I regularly write articles on {" "}
               <span>
                  <a
                     href="www.linkedin.com/in/vikasthakurr/"
                     className="underline bg-blue-dark bg-opacity-30 hover:bg-blue-dark hover:text-blue-light hover:no-underline"
                  >
                     Linkdin
                  </a>
               </span>
               <br />
            
               😆 Fun fact - I Have strange relation with Errors.
            </p>
         </div>
      </div>
   )
}

export default Me;