import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import DropDown from './DropDown';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Introduction() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className='main'>
      <DropDown/>
      <div className='details'>
      <div className='name'  data-aos="fade-right">
        <h4>I'm</h4>
        <h2>Shashank Pandey</h2>
      </div>
      <div className="front-box" data-aos="zoom-out-right">
        <p>Proficient in</p>
        <div class="tech">
          <Typewriter
            options={{
              strings: ["Web Development","Java","Data structures and Algorithm"],
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
      
    </div>
  )
}
