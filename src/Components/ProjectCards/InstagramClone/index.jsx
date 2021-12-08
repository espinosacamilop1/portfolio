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
                 <div className="igClone-image">
                          {/* <h3 className='igClone-title title'>
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
            ><div className='igClone-back'>
                    <h3 className='header__stylePhone'> 
                        <a className='igClone-a-tag' href='https://instagram-clone-3d846.firebaseapp.com/' rel="noopener noreferrer"  target='_blank'>Instagram Clone</a>
                        <a className='igClone-a-tag live_styles_phone' href='https://instagram-clone-3d846.firebaseapp.com/' rel="noopener noreferrer"  target='_blank'>Live Demo</a>
                    </h3>
                    <p className='igClone-description-p'>
                      The idea of this project is to clone Instagram's UI, and get to use Firebase for the 
                      first time. Users are able to create account, authenticate, upload images with 
                      captions, and make comments on other posts and see it update in real time.
                    </p>
                    <div className='igClone-lower-deets'>
                      <div className='igClone-duration'>
                          <h4>Duration</h4>
                          <section>1 Day</section>
                        </div>
                        <div className='igClone-tool-section'>
                          <h4>Tools</h4>
                          <section className='igClone-tool-list'>
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
