import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import ProfileImage from '../../my-images/profile.png'
import './index.css'


import Html from '../../my-images/html.png'
import Css from '../../my-images/css.png'
import JavaScript from '../../my-images/JavaScript-logo.png'
import ReactJs from '../../my-images/react.png'
import Express from '../../my-images/pngwing.com.png'
import NodeJs from '../../my-images/node.png'
import MongoDb from '../../my-images/mongo.png'
import MUI from '../../my-images/mui.png'
import Bootstrap from '../../my-images/Bootstrap_logo.svg.png'
import Figma from '../../my-images/figma.png'
import Firebase from '../../my-images/firebase-icon.svg'
export default function About() {
    return (
        <div>
            <NavBar/>
            <div  className="main-container about-container">
                <div className="desktop-position">
                  <div className="image-div">
                      <img className='profile-image' src={ProfileImage} alt=' camilos profile'></img>
                  </div>
                    <div className='bio-div'>
                        <h3>
                            Hi I'm Camilo Espinonsa...
                        </h3>
                        <p>
                        I am a<span className='fs-color'>Full Stack Web Developer</span>located in Miami, who has  been interested 
                        in programming since High School where I joined the Robotics Club and programmed 
                        the robot that got to state semi-finals.  Experienced in the most modern web development 
                        technologies. Focused on writing clean, robust and reusable code. Graduated from Ironhack 
                        Miami Coding Bootcamp. </p>
                    </div>
                </div>
                
                <div className='skills-div'>
                    <h3>Tools</h3>
                   <ul className='skills-list tablet-tools'>
                       <li>
                        <img className='icon-style' src={Html} alt='html logo'></img>
                        <h4>HTML</h4>
                       </li>
                       <li>
                        <img className='icon-style css-styles' src={Css} alt='css logo'></img>
                         <h4>CSS</h4>  
                        </li>
                        <li>
                        <img className='icon-style  spacing' src={JavaScript} alt='js logo'></img>
                          <h4>JavaScript</h4> 
                        </li>
                        <li>
                        <img className='icon-style  spacing' src={ReactJs} alt='react logo'></img>
                          <h4>ReactJS</h4> 
                        </li>
                        <li>
                        <img className='icon-style spacing' src={Express} alt='express js logo'></img>
                          <h4>ExpressJS</h4> 
                        </li>
                        <li>
                        <img className='icon-style spacing' src={NodeJs} alt='node js logo'></img>
                          <h4>NodeJS</h4> 
                        </li>
                        <li>
                        <img className='icon-style spacing' src={MongoDb} alt='mongo db logo'></img>
                           <h4>MongoDB</h4>
                        </li>
                        <li>
                        <img className='icon-style spacing' src={MUI} alt='material ui logo'></img>
                          <h4>MaterialUI</h4> 
                        </li>
                        <li>
                        <img className='icon-style bootstrap-style spacing' src={Bootstrap} alt='bootstrap logo'></img>
                          <h4>Bootstrap</h4> 
                        </li>
                        <li>
                        <img className='icon-style spacing' src={Figma} alt='figma logo'></img>
                          <h4>Figma</h4> 
                        </li>
                        <li>
                        <img className='icon-style spacing' src={Firebase} alt='figma logo'></img>
                          <h4>Firebase</h4> 
                        </li>
                   </ul>
                </div>

            </div>
          <Footer/>
        </div>
    )
}
