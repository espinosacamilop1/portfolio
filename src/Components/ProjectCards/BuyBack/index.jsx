import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import './index.css'
import styles from "./styles.module.css";

import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import ReactJs from '../../../my-images/react.png'
import Express from '../../../my-images/pngwing.com.png'
import NodeJs from '../../../my-images/node.png'
import MongoDb from '../../../my-images/mongo.png'
import MUI from '../../../my-images/mui.png'


export default function App() {
  const [flipped, set] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 70 }
  });
  return (
      <div>
        <div>
            <div className={styles.container} 
             onLoad={() => set(false)} 
             onClick={() => set((state) => !state)}>
                <a.div
                    className={`${styles.c} ${styles.back}`}
                    style={{ opacity: opacity.to((o) => 1 - o), transform }}
                >
                        <div className="buyback-image">
                          {/* <h3 className='title'>
                          BuyBack App
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
            ><div className='buyback-back'>
                    <h3 className="header__stylePhone">
                      <a className='a-tag' href="https://gifted-shockley-2cbdc7.netlify.app/" rel="noopener noreferrer"  target='_blank'>BuyBack App</a>
                      <a className='a-tag live_styles_phone' href='https://gifted-shockley-2cbdc7.netlify.app/' rel="noopener noreferrer"  target='_blank'>Live Demo</a>
                    </h3>
                    <p className='description-p'>In this app users are able to get a price for their cell phones 
                    based on the brand, model, carrier and storage, submit a form and
                     get updates on the status of their order. The admin can manage 
                     orders,  users and set the price for the devices.</p>
                    <div className='lower-deets'>
                      <div className='buyback__duration'>
                          <h4>Duration</h4>
                          <p>4 Weeks</p>
                        </div>
                        <div className='tool-section'>
                          <h4>Tools</h4>
                          <section className='tool-list'>
                            <img className='icon-styles' src={Html} alt='html logo'></img>
                            <img className='icon-styles' src={Css} alt='css logo'></img>
                            <img className='icon-styles' src={JavaScript} alt='js logo'></img>
                            <img className='icon-styles' src={ReactJs} alt='react-js logo'></img>
                            <img className='icon-styles' src={Express} alt='express-js logo'></img>
                            <img className='icon-styles' src={NodeJs} alt='node-js logo'></img>
                            <img className='icon-styles' src={MongoDb} alt='mongo-js logo'></img>
                            <img className='icon-styles' src={MUI} alt='mui-js logo'></img>
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
