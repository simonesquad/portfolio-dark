import React from 'react'
import myVideo from './assets/stripes.mov';
import './Glitches.css';
import DV from './assets/bright.png'

//Components
import OnePic from './common/OnePic';
import MovingTxt from './common/MovingTxt';

function Glitches() {
    return (
        <div>
             <MovingTxt
            animatedText='we wandered off the edge of the map...'
            />
            <div className="video__">
            <video 
            width="420" height="440"
            controls autoPlay loop muted>
                <source src={myVideo} type="video/mp4">
                </source>
            </video>
            </div>
            <OnePic
            title=''
            desc='Are we ready for the next level?'
            mainimg={DV}
            quote='>>>being a digital nomad taught me how to think in completely different ways && I carry this approach with me wherever I go.
            Coding and writing are personal forms of freedom that have the power to create new worlds and shared experiences. Currently I am focusing on novel formats for creating NFTs, learning smart contract languages, and looking for new outlets for my writing that can be streamlined throughout the noise. Stay tuned!'
            />
            

        </div>
    )
}

export default Glitches