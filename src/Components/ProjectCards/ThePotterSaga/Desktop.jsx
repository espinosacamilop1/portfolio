import React from 'react'
import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import ThePotterSaga from '../../../my-images/harry-potter-saga.svg'
import './Desktop.css'
function Desktop() {
    return (
        <div className="thePotterSaga__mainContainer">
            <div className="thePotterSaga__ShapeGradient">
                <div class="cut-1">
                </div>
                <div class="cut-2">
                </div>
            </div>  
            <img className='thePotterSaga__SampleImage' src={ThePotterSaga} alt='the potter saga preview'/>
            <h2 className='thePotterSaga__title'>The Potter Saga</h2>
            <p className="thePotterSaga__description">
                This was my first project in pure HTML, CSS, and Javascript, I used it to 
                understand more about Javascript functions, loops, DOM manipulation, Canvas, and 
                OOP.

            </p>

            <div className="thePotterSaga__tools">
                <h3 className="thePotterSaga__toolTitle">
                    Tools
                </h3>

                <section className='thePotterSaga__toolIcons'>
                    <img src={Html} alt='html logo'></img>
                    <img src={Css} alt='css logo'></img>
                    <img src={JavaScript} alt='js logo'></img>
                </section>
            </div>

            <a className="thePotterSaga__demoLink"  rel="noopener noreferrer" target="_blank" href="https://espinosacamilop1.github.io/the-potter-saga/">
                <button className='thePotterSaga__demoButton'>Live Demo</button>
            </a>
        </div>
    )
}

export default Desktop
