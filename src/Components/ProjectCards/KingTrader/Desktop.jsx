import React from 'react'
import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import Express from '../../../my-images/pngwing.com.png'
import NodeJs from '../../../my-images/node.png'
import MongoDb from '../../../my-images/mongo.png'
import MUI from '../../../my-images/mui.png'
import Bootstrap from '../../../my-images/Bootstrap_logo.svg.png'
import KingTrader from '../../../my-images/KingTraderMBP.svg'
import './Desktop.css'
function Desktop() {
    return (
        <div className="kingtrader__mainContainer">
            <div className="kingtrader__ShapeGradient">
                <div class="cut">
                </div>
            </div>  
            <img className="kingtrader__SampleImage" src={KingTrader} alt='kingTrader preview'/>
            <h2 className='kingtrader__title'>KingTrader</h2>

            <p className="kingtrader__description">
                This is a trading platform where users are able to create an account, 
                buy, sell, watch stocks and add them to a watchlist, users are also able to 
                read the most recent news and commnet on each individual stock.
            </p>

            <div className="kingtrader__tools">
                <h3 className="kingtrader__toolTitle">
                    Tools
                </h3>

                <section className='kingtrader__toolIcons'>
                    <img src={Html} alt='html logo'></img>
                    <img src={Css} alt='css logo'></img>
                    <img src={JavaScript} alt='js logo'></img>
                    <img src={Express} alt="express js"></img>
                    <img src={NodeJs} alt='node'></img>
                    <img src={MongoDb} alt='mongoDb logo'></img>
                    <img src={MUI} alt='mui logo'></img>
                    <img src={Bootstrap} alt='bootstrap logo'></img>
                </section>
            </div>

            <a className="kingtrader__demoLink" href="https://kingtraderapp.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                <button className='kingtrader__demoButton'>Live Demo</button>
            </a>
        </div>
    )
}

export default Desktop
