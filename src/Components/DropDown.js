import React from 'react'
import {Link} from 'react-router-dom';
export default function DropDown() {
  return (
    <div>
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
            <Link to="/project">Projects</Link>
            <Link to="https://docs.google.com/document/d/1xNi_vSxQQvh0ivs4-jY-3333qjJiaILe3pTVQXqUFsQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >Resume</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
