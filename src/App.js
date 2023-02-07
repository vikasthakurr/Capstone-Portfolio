import React from 'react'
import Navbar from './components/Navbar';
import Me from "./components/Me";
import Work from "./components/Work";
// import About from "./components/About";
// import Contact from "./components/Contact";



const App = () => {
  return (
    <>
      <Navbar/>
       <Me />
      <Work />
      {/* <About />
      <Contact /> */}
    </>
   
  );
}

export default App