import React from 'react'
import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import ReactJs from '../../../my-images/react.png'
import NodeJs from '../../../my-images/node.png'
import Firebase from '../../../my-images/firebase-icon.svg'
import InstagramClone from '../../../my-images/igClone.svg'
import './Desktop.css'
function Desktop() {
    return (
        <div className="igClone__mainContainer">

            <div className="igClone__shapeGradient"></div>
            <img className='igClone__SampleImage' src={InstagramClone} alt='instagram clone preview'/>
            <h2 className='igClone__title'>Instagram Clone</h2>

            <p className="igClone__description">
                The idea of this project is to clone Instagram's UI, and get to use Firebase for the 
                first time. Users are able to create account, authenticate, upload images with 
                captions, and make comments on other posts and see it update in real time.
            </p>

            <div className="igClone__tools">
                <h3 className="igClone__toolTitle">
                    Tools
                </h3>

                <section className='igClone__toolIcons'>
                    <img src={Html} alt='html logo'></img>
                    <img src={Css} alt='css logo'></img>
                    <img src={JavaScript} alt='js logo'></img>
                    <img src={ReactJs} alt="react js"></img>
                    <img src={NodeJs} alt='nodeJs logo'></img>
                    <img src={Firebase} alt='Firebase logo'></img>
                </section>
            </div>

            <a className="igClone__demoLink"  rel="noopener noreferrer" target="_blank" href="https://instagram-clone-3d846.firebaseapp.com/">
                <button className='igClone__demoButton'>Live Demo</button>
            </a>
        </div>
    )
}

export default Desktop
