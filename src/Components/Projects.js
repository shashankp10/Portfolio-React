import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DropDown from './DropDown';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  const linkStyle = {
    textDecoration: 'none',
  };
  useEffect(()=>{
      Aos.init({duration:3000});
  },[])
  return (
    <>
      <DropDown/>
      <h1 className="about-heading" data-aos="fade-right">Projects</h1>
      <div className='projects'>
        <Card style={{ width: '18rem', 
          background: 'rgba(255, 255, 255, 0.1)', 
          border: '1px solid white',
          color:'white',transition: 'transform 0.3s', }} data-aos="fade-left"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} >
          <Card.Body>
            <Card.Title>CollegeEazy</Card.Title>
            <Card.Subtitle><br/>Spring Boot, React.js, MySQL, JWT Authentication</Card.Subtitle>
            <Card.Text>
            <br/>Built to ease the life of college students, by providing study materials, attendance tracker, and a store to sell or buy items from other students.
            </Card.Text>
            <Card.Link as={Link} to="https://github.com/shashankp10/Project-CollegeEazy" style={linkStyle} target="_blank" rel="noopener noreferrer">Code</Card.Link>
            <Card.Link as={Link} to="https://collegeeazy.vercel.app/" style={linkStyle} target="_blank" rel="noopener noreferrer">Website</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', 
          background: 'rgba(255, 255, 255, 0.1)', 
          border: '1px solid white',
          color:'white',transition: 'transform 0.3s', }} data-aos="fade-left"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} >
          <Card.Body>
            <Card.Title>Desh Ke Innovator</Card.Title>
            <Card.Subtitle><br/>Spring Boot, React.js, MySQL</Card.Subtitle>
            <Card.Text>
            <br/>Built to provide a platform to school students to share their ideas to collaborate with mentors to convert their ideas into a reality.
            </Card.Text>
            <Card.Link as={Link} to="https://github.com/shashankp10/DeshKeInnovators" style={linkStyle} target="_blank" rel="noopener noreferrer">Code</Card.Link>
            {/* <Card.Link as={Link} to="" style={linkStyle} target="_blank" rel="noopener noreferrer">Website</Card.Link> */}
          </Card.Body>
        </Card><Card style={{ width: '18rem', 
          background: 'rgba(255, 255, 255, 0.1)', 
          border: '1px solid white',
          color:'white',transition: 'transform 0.3s', }} data-aos="fade-left"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} >
          <Card.Body>
            <Card.Title>Hack Mentor</Card.Title>
            <Card.Subtitle><br/>Spring Boot, React.js, MySQL, Langchain</Card.Subtitle>
            <Card.Text>
            <br/>Student counseling platform where students can get personalized conventional and non - conventional career options.
            </Card.Text>
            <Card.Link as={Link} to="https://github.com/shashankp10/chatbot-integrated-with-OpenAI" style={linkStyle} target="_blank" rel="noopener noreferrer">Code</Card.Link>
            {/* <Card.Link as={Link} to="" style={linkStyle} target="_blank" rel="noopener noreferrer">Website</Card.Link> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', 
          background: 'rgba(255, 255, 255, 0.1)', 
          border: '1px solid white',
          color:'white',transition: 'transform 0.3s', }} data-aos="fade-left"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
          <Card.Body>
            <Card.Title>Amazone Clone</Card.Title>
            <Card.Subtitle><br/>HTML, CSS, Javascript</Card.Subtitle>
            <Card.Text>
            <br/>Attempted to create a frontend clone of the online shopping platform Amazon.
            </Card.Text>
            <Card.Link as={Link} to="https://github.com/shashankp10/Amazon-Clone" style={linkStyle} target="_blank" rel="noopener noreferrer">Code</Card.Link>
            <Card.Link as={Link} to="https://shashankp10.github.io/Amazon-Clone/" style={linkStyle} target="_blank" rel="noopener noreferrer">Website</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="github">
        <Link to="https://github.com/shashankp10" target="_blank" >
          <Button variant="dark" className="custom-button">GitHub<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg></Button>{' '}
        </Link>
      </div>
      <div className='Navigate'>
        <Link to="/about">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-square">
                <rect width="18" height="18" x="3" y="3" rx="3" />
                <path d="m14 8-4 4 4 4" />
            </svg>
        </Link>
        <Link to="/contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-square">
                <rect width="18" height="18" x="3" y="3" rx="3" />
                <path d="m10 8 4 4-4 4" />
            </svg>
        </Link>
      </div>
    </>
  )
}
