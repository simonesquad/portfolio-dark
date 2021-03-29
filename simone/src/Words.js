import React from 'react'

//Components
import Navigation from '../Navigation';
import Box from '../common/Box';
import Cup from '../assets/cup.jpeg';

function Words() {
    return (
        <div>
            <Navigation 
            oneBtnTxt='//'
            oneBtnLink='/'
            twoBtnTxt='CV//'
            twoBtnLink='/cv'
            threeBtnTxt='Glitches//'
            threeBtnLink='/glitches'
            fourBtnTxt='Contact//'
            fourBtnLink='/contact'
            />
            <Box
            title=''
            desc=''
            mainimg={Cup}
            />
        </div>
    )
}

export default Words
