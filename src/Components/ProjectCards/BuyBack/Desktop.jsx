import React from 'react'
import './Desktop.css'
import './animations.css'
import BuyBack from '../../../my-images/BuyBackMBP.svg'


import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import ReactJs from '../../../my-images/react.png'
import Express from '../../../my-images/pngwing.com.png'
import NodeJs from '../../../my-images/node.png'
import MongoDb from '../../../my-images/mongo.png'
import MUI from '../../../my-images/mui.png'
function Desktop() {
    return (
        <div className="buyback__mainContainer">
            <div className="buyback__ShapeGradient"></div>
            <img className='buyback__SampleImage' src={BuyBack} alt='buyback preview'/>
            <h2 className='buyback__title'>BuyBack</h2>

            <p className="buyback__description">
                In this app users are able to get a price for their cell phones based on the brand, 
                model, carrier and storage, submit a form and get updates on the status of their order. 
                The admin can manage orders,  users and set the price for the devices.  
            </p>

            <div className="buyback__tools">
                <h3 className="buyback__toolTitle">
                    Tools
                </h3>

                <section className='buyback__toolIcons'>
                    <img src={Html} alt='html logo'></img>
                    <img src={Css} alt='css logo'></img>
                    <img src={JavaScript} alt='js logo'></img>
                    <img src={ReactJs} alt="react js"></img>
                    <img src={Express} alt='express logo'></img>
                    <img src={NodeJs} alt='nodeJs logo'></img>
                    <img src={MongoDb} alt='mongo logo'></img>
                    <img src={MUI} alt='mui logo'></img>
                </section>
            </div>

            <a className="buyback__demoLink" href="https://gifted-shockley-2cbdc7.netlify.app/" rel="noopener noreferrer" target="_blank">
                <button className='buyback__demoButton'>Live Demo</button>
            </a>
        </div>
    )
}

export default Desktop
