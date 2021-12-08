import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import './index.css'
import styles from "./styles.module.css";

import Html from '../../../my-images/html.png'
import Css from '../../../my-images/css.png'
import JavaScript from '../../../my-images/JavaScript-logo.png'



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
            onLoad={() => 
                set(false)}

            
            onClick={() => set((state) => !state)}>
                <a.div
                    className={`${styles.c} ${styles.back}`}
                    style={{ opacity: opacity.to((o) => 1 - o), transform }}
                >
                 <div className="thePotterSaga-image">
                          {/* <h3 className='thePotterSaga-title title'>
                          The Potter Saga
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
            ><div className='thePotterSaga-back'>
                    <h3 className="header__stylePhone"> 
                      <a className='thePotterSaga-a-tag' href='https://espinosacamilop1.github.io/the-potter-saga/' rel="noopener noreferrer"  target='_blank'>The Potter Saga</a>
                      <a className='thePotterSaga-a-tag live_styles_phone' href='https://espinosacamilop1.github.io/the-potter-saga/' rel="noopener noreferrer"  target='_blank'>Live Demo</a>
                    </h3>
                    <p className='thePotterSaga-description-p'>
                      This was my first project in pure HTML, CSS, and Javascript, I used it to understand more about Javascript functions, loops, DOM manipulation, Canvas, and OOP.
                    </p>
                    <div className='thePotterSaga-lower-deets'>
                      <div className='thePotterSaga-duration'>
                          <h4>Duration</h4>
                          <section>2 Weeks</section>
                        </div>
                        <div className='thePotterSaga-tool-section'>
                          <h4>Tools</h4>
                          <section className='thePotterSaga-tool-list'>
                            <img className='icon-styles' src={Html} alt='html logo'></img>
                            <img className='icon-styles' src={Css} alt='css logo'></img>
                            <img className='icon-styles' src={JavaScript} alt='js logo'></img>
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
