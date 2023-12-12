import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  const handleSendEmail = () => {
    const recipientEmail = 'pandey2001shashank@gmail.com';
    const subject = 'Subject of the email'; 
    const body = 'Body of the email';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  
  return (
    <>
      <h1 className="about-heading">Contact</h1>
      <div className='contact-details'>
        <p>I'm seeking for opportunities. Drop me a message for internship / freelance positions or connect on Linkedin</p>
        <input type="text" className="input-box" placeholder="Your message" />
        <div className='send-request'>
          <Link to="https://www.linkedin.com/in/shashank-pandey-782997229/" target="_blank" >
          <Button variant="primary" className="custom-button">Linkedin  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
          </svg></Button>{' '}
        </Link>
        <button className="send-button" onClick={handleSendEmail}>Send</button>
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
  )
}
