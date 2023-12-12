import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import SkillCard from './SkillCard';
import DropDown from './DropDown';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div>
      <DropDown/>
      <h1 className="about-heading" data-aos="fade-right">About Me</h1>
      <div className='Skills' data-aos="flip-left">
        <SkillCard/>
      </div>
      <div className='Navigate'>
        <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-square">
                <rect width="18" height="18" x="3" y="3" rx="3" />
                <path d="m14 8-4 4 4 4" />
            </svg>
        </Link>
        <Link to="/project">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-square">
                <rect width="18" height="18" x="3" y="3" rx="3" />
                <path d="m10 8 4 4-4 4" />
            </svg>
        </Link>
      </div>
    </div>
  )
}
