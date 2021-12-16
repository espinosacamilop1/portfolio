import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import './index.css'
import styles from "./styles.module.css";

import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'
import NodeJs from '../../../my-images/node.png'
import MUI from '../../../my-images/mui.png'
import Firebase from '../../../my-images/firebase-icon.svg'


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
            <div className={styles.container} onLoad={() => set(false)} onClick={() => set((state) => !state)}>
              <a.div
                    className={`${styles.c} ${styles.back}`}
                    style={{ opacity: opacity.to((o) => 1 - o), transform }}
                >
                 <div className="pt-image">
                          {/* <h3 className='pt-title title'>
                          Instagram Clone
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
            ><div className='pt-back'>
                    <h3 className='header__stylePhone'> 
                        <a className='pt-a-tag' href='https://github.com/espinosacamilop1/package-tracker' rel="noopener noreferrer"  target='_blank'>Package Tracker</a>
                        {/* <a className='pt-a-tag live_styles_phone' href='https://instagram-clone-3d846.firebaseapp.com/' rel="noopener noreferrer"  target='_blank'>Live Demo</a> */}
                    </h3>
                    <p className='pt-description-p'>
                        This project's purpose is to 
                    solve an issue at my previous job. Bell attendants 
                    would receive packages and front desks 
                    agents wouldn't know if we had packages for the guests. 
                    This solves a communication issue, and makes the workplace 
                    more efficient.(Not finshied.)
                    </p>
                    <div className='pt-lower-deets'>
                      <div className='pt-duration'>
                          <h4>Duration</h4>
                          <section>1 Day</section>
                        </div>
                        <div className='pt-tool-section'>
                          <h4>Tools</h4>
                          <section className='pt-tool-list'>
                            <img className='icon-styles' src={Html} alt='html logo'></img>
                            <img className='icon-styles' src={Css} alt='css logo'></img>
                            <img className='icon-styles' src={JavaScript} alt='js logo'></img>
                            <img className='icon-styles' src={NodeJs} alt='nodeJs logo'></img>
                            <img className='icon-styles' src={MUI} alt='mui logo'></img>
                            <img className='icon-styles' src={Firebase} alt='firebase logo'></img>
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
