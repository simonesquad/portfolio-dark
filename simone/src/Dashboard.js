import React from 'react';

//Components
import Navigation from './Navigation';
import Box from './common/Box';
import Profile from './assets/no_grey.png';
import Water from './assets/water.jpeg';
import Cup from './assets/cup.jpeg';



function Dashboard() {
    return (
        <div>
            <Navigation 
            oneBtnTxt='//'
            oneBtnLink='/'
            twoBtnTxt='CV//'
            twoBtnLink='/cv'
            threeBtnTxt='Words//'
            threeBtnLink='/words'
            fourBtnTxt='Glitches//'
            fourBtnLink='/glitches'
            fiveBtnTxt='Contact//'
            fiveBtnLink='/contact'
            />
            <div className="box__container">
            <Box 
            title='Simone Ballard'
            desc='Code// Writing// Travel//'
            mainimg={Profile}
            img2={Water}
            img3={Cup}
            add_more='Welcome.'
            />
            </div>
        </div>
    )
}

export default Dashboard