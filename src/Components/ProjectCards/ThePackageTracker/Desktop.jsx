import React from 'react'
import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import ReactJs from '../../../my-images/react.png'
import NodeJs from '../../../my-images/node.png'
import Firebase from '../../../my-images/firebase-icon.svg'
import PackageTrackerImg from '../../../my-images/pt.svg'
import './Desktop.css'

function PackageTracker() {
    return (
        <div className="pt__mainContainer">

            <div className="pt__shapeGradient"></div>
            <img className='pt__SampleImage' src={PackageTrackerImg} alt='instagram clone preview'/>
            <h2 className='pt__title'>Package Tracker</h2>

            <p className="pt__description">
                This project's purpose is to 
                solve an issue at my previous job. Bell attendants 
                would receive packages and front desks 
                agents wouldn't know if we had packages for the guests. 
                This solves a communication issue, and makes the workplace 
                more efficient.(Not finshied.)
            </p>

            <div className="pt__tools">
                <h3 className="pt__toolTitle">
                    Tools
                </h3>

                <section className='pt__toolIcons'>
                    <img src={Html} alt='html logo'></img>
                    <img src={Css} alt='css logo'></img>
                    <img src={JavaScript} alt='js logo'></img>
                    <img src={ReactJs} alt="react js"></img>
                    <img src={NodeJs} alt='nodeJs logo'></img>
                    <img src={Firebase} alt='Firebase logo'></img>
                </section>
            </div>

            {/* <a className="pt__demoLink"  rel="noopener noreferrer" target="_blank" href="https://instagram-clone-3d846.firebaseapp.com/">
                {/* <button className='pt__demoButton'>Live Demo</button>
            </a> */}
        </div>
    )
}

export default PackageTracker
