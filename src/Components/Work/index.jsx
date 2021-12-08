import React from "react";
import NavBar from '../NavBar'
import Footer from '../Footer'
import BuyBackCard from "../ProjectCards/BuyBack"
import KingTraderCard from '../ProjectCards/KingTrader'
import ThePotterSagaCard from '../ProjectCards/ThePotterSaga'
 import InstagramCloneCard from '../ProjectCards/InstagramClone'
import './index.css'

import BuyBack from '../ProjectCards/BuyBack/Desktop'
import KingTrader from '../ProjectCards/KingTrader/Desktop'
import ThePotterSaga from '../ProjectCards/ThePotterSaga/Desktop'
import InstagramClone from '../ProjectCards/InstagramClone/Desktop'
import WorkInProgress from '../ProjectCards/WorkInProgress'

export default function App() {

  return (
      <div>
        <NavBar/>
        <div className="container-flex">
            <h3>Work</h3>
            <div className='container-display'>
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
            <div className='tablet-styles'>
                <BuyBack/>
                <KingTrader/>
                <InstagramClone/>
                <ThePotterSaga/>


            </div>
            
        <div className='footer-position'>

            <Footer/>
        </div>
        </div>
        
      </div>
  );
}
