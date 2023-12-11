import React, { useState } from 'react';
import './App.css';
import ParticleBG from './Components/ParticleBG';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Project from './Components/Projects';
import Contact  from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ParticleBG style={{ zIndex: -1 }} />
      <Routes>
        <Route path="/" element={<Introduction/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
