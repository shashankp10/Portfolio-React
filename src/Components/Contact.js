import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import DropDown from './DropDown';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form Data:", form.current);
    emailjs.sendForm('service_cfqbgtu', 'template_uvi4g37', form.current, '49d2lQplNu6mw181N')
      .then((result) => {
          console.log(result.text);
          console.log("message sent!!");
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>  
      <DropDown/>
      <div className='contact-details'>
        <h1 className="about-heading">Contact Me</h1>
        <div className='input-field'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" className="name-box" placeholder="Enter your name" required />
            <textarea name="message" className="input-box" placeholder="Write your message here" required rows="4"></textarea>
            <div className='send-request'>
              <button type="submit" className="send-button">
                <span style={{ marginRight: '0.5em' }}>Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-envelope-check" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                </svg>
              </button>
              <a href="https://www.linkedin.com/in/shashank-pandey-782997229/" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="custom-button" style={{ display: 'flex', gap: '0.3em' }}>
                  Linkedin
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                  </svg>
                </Button>
              </a>
            </div>
          </form>  
        </div>
      </div>
      <div className='Navigate'>
        <Link to="/project">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-square">
            <rect width="18" height="18" x="3" y="3" rx="3" />
            <path d="m14 8-4 4 4 4" />
          </svg>
        </Link>
      </div>
    </>
  );
  
}
