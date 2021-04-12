import React from 'react'
import myVideo from './assets/stripes.mov';
import './Glitches.css';
import DV from './assets/dummy_variable.jpg'

//Components
import Navigation from './Navigation';
import Box from './common/Box';
import MovingTxt from './common/MovingTxt';

function Glitches() {
    return (
        <div>
            <Navigation 
            oneBtnTxt='//'
            oneBtnLink='/'
            twoBtnTxt='CV//'
            twoBtnLink='/cv'
            threeBtnTxt='Words//'
            threeBtnLink='/words'
            fourBtnTxt='Contact//'
            fourBtnLink='/contact'
            />
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
            <Box
            title='This timeline will work fine'
            desc='being a digital nomad taught me how to think in completely different ways and I carry this open-mindedness with me in my approach to creating products...'
            mainimg={DV}
            />
            

        </div>
    )
}

export default Glitches