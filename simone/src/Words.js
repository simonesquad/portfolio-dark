import React from 'react'

//Components
import Navigation from './Navigation';
import Box from './common/Box';
import Face from './assets/face.jpeg';

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
            mainimg={Face}
            />
        </div>
    )
}

export default Words
