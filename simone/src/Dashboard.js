import React from 'react';

//Components
import Navigation from './Navigation';
import Box from './common/Box';
import TextBox from './common/TextBox';
import Profile from './assets/la.jpeg';
import Water from './assets/water.jpeg';
import Snow from './assets/snow.jpeg';
import Summer from './assets/summer.jpeg';
import Tree from './assets/tree.jpeg';



function Dashboard() {
    return (
        <div>
            <Navigation 
            oneBtnTxt='/home'
            oneBtnLink='/'
            twoBtnTxt='Credentials'
            twoBtnLink='/cv'
            threeBtnTxt='Words'
            threeBtnLink='/words'
            fourBtnTxt='Glitches'
            fourBtnLink='/glitches'
            fiveBtnTxt='Contact'
            fiveBtnLink='/contact'
            sixBtnTxt='Github'
            sixBtnLink='https://www.github.com/simonesquad'
            />
            <div className="box__container">
            <Box 
            title='Simone Ballard'
            desc='Code | Comms | Environment'
            mainimg={Profile}
            img2={Water}
            img3={Tree}
            img4={Summer}
            img5={Snow}
            add_more='' 
            />
            <TextBox 
            title='The journey has been real...'
            text1='Over these years I have been on a journey into sustainable tech, software development, crypto, and the power of communication to motivate forces for change. This journey has taken me all over the states and world, and I have learned so much from each place, but more importantly I have learned that we are a global movement. With every stage of the journey I continue to leverage my skills and experience towards addressing some of the major societal challenges of today.'
            text2='I am constantly searching for interesting projects and people who are making waves in their respective fields. Ready to discuss how we can build something fascinating together.'
            />
            </div>

        </div>
    )
}

export default Dashboard