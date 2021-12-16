import React from "react";
import NavBar from '../NavBar'
import Footer from '../Footer'
import BuyBackCard from "../ProjectCards/BuyBack"
import KingTraderCard from '../ProjectCards/KingTrader'
import ThePotterSagaCard from '../ProjectCards/ThePotterSaga'
import InstagramCloneCard from '../ProjectCards/InstagramClone'
import PackageTrackerCard from "../ProjectCards/ThePackageTracker";
import './index.css'

import Reveal from 'react-reveal/Reveal';


import BuyBack from '../ProjectCards/BuyBack/Desktop'
import KingTrader from '../ProjectCards/KingTrader/Desktop'
import ThePotterSaga from '../ProjectCards/ThePotterSaga/Desktop'
import InstagramClone from '../ProjectCards/InstagramClone/Desktop'
import PackageTracker from '../ProjectCards/ThePackageTracker/Desktop'

export default function App() {

  return (
      <div>
        <NavBar/>
        <div className="container-flex">
            <h3>Work</h3>
            <div className='container-display'>
                <div>
                    <PackageTrackerCard className='phone-card'/>
                </div>
                <div>
                    <BuyBackCard className='phone-card'/>
                </div>
                <div >
                    <KingTraderCard className='phone-card'/>
                </div>
                <div >
                    <InstagramCloneCard className='phone-card'/>
                </div>
                <div >
                    <ThePotterSagaCard className='phone-card'/>
                </div>
            </div>
            <Reveal>
            <div className='tablet-styles'>
                <PackageTracker/>
                <BuyBack/>
                <KingTrader/>
                <InstagramClone/>
                <ThePotterSaga/>
            </div>
            </Reveal>
        <div className='footer-position'>

            <Footer/>
        </div>
        </div>
        
      </div>
  );
}
