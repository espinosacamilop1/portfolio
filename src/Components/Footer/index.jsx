import React from 'react'
import {Link} from 'react-router-dom'
import linkedIn from '../../my-images/linkedin.png'
import Github from '../../my-images/github.png'
import Resume from '../../my-images/Camilo-Espinosa-Resume-Jan-22.pdf'
import './index.css'
export default function Footer() {
    return (
        <section className='footer-section'>
            <div className="div-footer-list">
                <ul className="footer-list">
                    <li>
                        <Link to='/work'>Work</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='div-profile-links'>
                <ul className='profile-links'>
                    <li>
                        <a href="http://www.linkedin.com/in/camiloesp" rel="noopener noreferrer" target="_blank" alt='linked in logo'>
                            <img className='linkedIn-footer' src={linkedIn} alt='linked in logo'></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/espinosacamilop1" rel="noopener noreferrer" target="_blank" alt='git hub logo'>
                            <img className="github-footer" src={Github} alt='github link'></img>
                        </a>
                    </li>
                    <li>
                        <a className='resume-title' href={Resume} download>
                            <img className="resume-image-footer" src="https://img.icons8.com/ios/50/000000/resume.png" alt='file'/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
