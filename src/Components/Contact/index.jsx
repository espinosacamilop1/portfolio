import React,  { useRef } from 'react'
import NavBar from '../NavBar'
import emailjs from 'emailjs-com';
import './index.css'

import Reveal from 'react-reveal/Reveal';


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hj0dpa8', 'Portfolio-Contact', form.current, 'user_K0U5Lz4lGcOhMPrp83v2u')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.currentTarget.reset()
      };

    return (
        <div>
            <NavBar/>
            <Reveal>
            <div className="higher-div">
                <div className='contact-message'>
                    <p>If you have any project ideas or questions don't hesitate to contact me.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className='contact-me-form'>
                    <input className='input name-input' placeholder='Full Name' type="text" name="user_name" />
                    
                    <input className='input' placeholder='Email' type="email" name="user_email" />
                    
                    <textarea className='message-input contact-message' placeholder='Message' name="message" />
                    
                    <input className='contact-btn submit-btn' type="submit" value="Send" />
                </form>
            </div>
        </Reveal>
        </div>
    )
}
