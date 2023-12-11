import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function Introduction() {
  return (
    <div className='main'>
      <div class="dropdown-container">
        <div class="dropdown" id="myDropdown">
          <button class="dropdown-btn" onclick="toggleDropdown()">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <div class="dropdown-content">
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="https://www.linkedin.com/in/shashank-pandey-782997229/overlay/1635546625603/single-media-viewer/?profileId=ACoAADlGyJIBwNup3SvG8yQ9LOE7Dk260DYVli8" target="_blank" rel="noopener noreferrer" >Resume</Link>
          </div>
        </div>
      </div>
      <div className='name'>
        <h4>I'm</h4>
        <h2>Shashank Pandey</h2>
      </div>
      <div className="front-box">
        <p>Proficient in</p>
        <div class="tech">
          <Typewriter
            options={{
              strings: ["Java","Data structures and Algorithm", "Web Development"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p>Learning more languages & Frameworks</p>
        <Link to="/about">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-square">
            <rect width="18" height="18" x="3" y="3" rx="3" />
            <path d="m10 8 4 4-4 4" />
          </svg>
        </Link>  
      </div>
    </div>
  )
}
