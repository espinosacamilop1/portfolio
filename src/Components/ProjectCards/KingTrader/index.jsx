import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import './index.css'
import styles from "./styles.module.css";

import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import Express from '../../../my-images/pngwing.com.png'
import NodeJs from '../../../my-images/node.png'
import MongoDb from '../../../my-images/mongo.png'
import MUI from '../../../my-images/mui.png'
import Bootstrap from '../../../my-images/Bootstrap_logo.svg.png'


export default function App() {
  const [flipped, set] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 70 }
  });




  return (
      <div className="container-display">
        <div >
            <div className={styles.container} 
                 onLoad={() => set(false)}  
                 onClick={() => set((state) => !state)}>
                  <a.div
                      className={`${styles.c} ${styles.back}`}
                      style={{ opacity: opacity.to((o) => 1 - o), transform }}
                  >
                  <div className="kingtrader-image">
                            {/* <h3 className='kingtrader-title title'>
                            King Trader
                            <p>Tap for More</p>
                            </h3> */}
                            
                    </div>
                  </a.div>

            <a.div
                className={`${styles.c} ${styles.front}`}
                style={{
                opacity,
                transform,
                rotateY: "180deg"
                }}
            ><div className='kingtrader-back'>
                    <h3 className="header__stylePhone">
                        <a className='kt-a-tag' href='https://kingtraderapp.herokuapp.com/' rel="noopener noreferrer"  target='_blank'>King Trader</a>
                        <a className='kt-a-tag live_styles_phone' href='https://kingtraderapp.herokuapp.com/' rel="noopener noreferrer"  target='_blank'>Live Demo</a>
                    </h3>
                    <p className='kt-description-p'>This is a trading platform where users are able to create an account, 
                                buy, sell, watch stocks and add them to a watchlist, users are also able to 
                                read the most recent news and commnet on each individual stock.</p>
                    <div className='kt-lower-deets'>
                      <div className='kt-duration'>
                          <h4>Duration</h4>
                          <section>4 Weeks</section>
                        </div>
                        <div className='kt-tool-section'>
                          <h4>Tools</h4>
                          <section className='kt-tool-list'>
                            <img className='icon-styles' src={Html} alt='html logo'></img>
                            <img className='icon-styles' src={Css} alt='css logo'></img>
                            <img className='icon-styles' src={JavaScript} alt='js logo'></img>
                            <img className='icon-styles' src={Express} alt='express logo'></img>
                            <img className='icon-styles' src={NodeJs} alt='nodeJs logo'></img>
                            <img className='icon-styles' src={MongoDb} alt='mongoDb logo'></img>
                            <img className='icon-styles' src={MUI} alt='mui logo'></img>
                            <img className='icon-styles' src={Bootstrap} alt='bootstrap logo'></img>
                          </section>
                      </div>
                    </div>
                </div>
            </a.div>
            </div>
        </div>
      </div>
  );
}
