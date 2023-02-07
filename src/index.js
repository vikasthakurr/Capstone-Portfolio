import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Me from './components/Me';
import Contact from "./components/Contact";
import Work from './components/Work';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
            <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/" element={<Navbar />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Me" element={<Me />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/Work" element={<Work />} />

            </Routes>
      </Router>


);


