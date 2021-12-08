import React from 'react'
import './index.css'
import linkedIn from '../../my-images/linkedin.png'
import Github from '../../my-images/github.png'
import Resume from '../../my-images/Camilo-Espinosa-Resume.pdf'
import {Link} from 'react-router-dom'
export default function NavBar() {




    return (
        <nav>
            <header className="header">
        
                <Link className="nav-logo" to="/">CE</Link>  
                <input className="menu-btn" type="checkbox" id="menu-btn" />
              
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/work">Work</Link></li>
                        <li>
                            <Link to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                    <ul className='menu-links menu'>
                        <li>
                            <a href="http://www.linkedin.com/in/camiloesp" rel="noopener noreferrer" target="_blank">
                                <img className='linkedIn' src={linkedIn} alt='linked in logo'></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/espinosacamilop1" rel="noopener noreferrer"  target="_blank">
                                <img className="github" src={Github} alt='github link'></img>
                            </a>
                        </li>
                        <li>
                            <a className='resume-title' href={Resume} download>
                                <img className="resume-image" src="https://img.icons8.com/ios/50/000000/resume.png" alt="resume"/>
                            </a>
                        </li>
                    </ul>
            </header>
         
        </nav>
    )
}
