import React from 'react';
import './Words.css'
//Components
import Button from './common/Button';
import TextBox from './common/TextBox';
import Navigation from './Navigation';
import OnePic from './common/OnePic';
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
            <OnePic
            title=''
            desc='Communication is the key to opening all worlds...'
            mainimg={Face}
            quote='I realized early on in my studies and travels that how you communicate an idea is half the value of the idea itself. When I started my career in environmental science, effecitively communicating the facts of climate change was no small task. Since then social media has become a staple of almost every industry and missing the mark on a digital message can be disastrous. Moving into the next decade I have thoroughly honed my dominant writing style and feel confident in my expert level editing and curation abilities. The next phase should be interesting and I look forward to expanding the current repertoire.'
            />
            <TextBox 
            title='If'
            text1='"If you can make one heap of all your winnings
            And risk it on one turn of pitch-and-toss,
            And lose, and start again at your beginnings
            And never breathe a word about your loss;
            If you can force your heart and nerve and sinew
            To serve your turn long after they are gone,   
            And so hold on when there is nothing in you
            Except the Will which says to them: ‘Hold on!’"'
            text2='"If you can talk with crowds and keep your virtue,   
            Or walk with Kings—nor lose the common touch,
            If neither foes nor loving friends can hurt you,
            If all men count with you, but none too much;
            If you can fill the unforgiving minute
            With sixty seconds’ worth of distance run,   
            Yours is the Earth and everything that’s in it,   
            And—which is more—you’ll be a Man, my son!" 
            If - Rudyard Kipling'
            />
             <div className="medium__button">
                <Button 
                text='Click Bait'
                link="https://medium.com/@simone-a-ballard" rel="noreferrer" target = "_blank"
                />
            </div>
        </div>
    )
}

export default Words
