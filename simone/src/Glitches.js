import React from 'react'

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
            <Box
            title='Which timeline are we in...'
            desc='being a digital nomad and crossing into many different realities taught me how to think in completely different ways in approach to my writing and coding...'
            />
        </div>
    )
}

export default Glitches