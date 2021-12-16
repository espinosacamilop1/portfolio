import React from 'react'
import './index.css'
import '../NavBar/index.css'
import NavBar from '../NavBar'
import Footer from '../Footer'
import ProfileImage from '../../my-images/profile.png'
import {Link} from 'react-router-dom'
import BuyBack from '../ProjectCards/BuyBack/Desktop'
import InstagramClone from '../ProjectCards/InstagramClone/Desktop'
import Reveal from 'react-reveal/Reveal';




export default function Home() {

    return (
        <div className="main-container">
            <NavBar/>
       
            <Reveal>
                <div className="sub-container">
                
                    <div className="first-container">
                        <h2>Hello!</h2>
                        <h3 >I'm Camilo Espinosa 
                        a<span className="fs-style">Full-Stack Developer</span>located 
                        in Miami FL.</h3>
                    </div>
                    <div className='image-container'>
                        <img className="profile-image" src={ProfileImage} alt='profile'></img>
                    </div>  
                
                </div>
                <div className='last-container'>
                    <p>Must haves are a laptop, a suitcase that is always ready for spontaneous travel and lots of Cuban coffee.</p>
                    <div className='button-position'>
                        <Link to='/contact'>
                            <button className="contact-btn">Get in Touch</button>
                        </Link>
                    </div>
                </div>
         
            <div className='recent-work'>
                <h3>Recent Work</h3>
                <div className='inner-recent-work'>
                    <InstagramClone/>
                    <BuyBack/>
                </div>
            </div>
            </Reveal>
             <Footer/>
        </div>
    )
}
