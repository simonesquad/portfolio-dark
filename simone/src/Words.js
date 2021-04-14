import React, { useState } from 'react';
import './Words.css'
//Components
import Navigation from './Navigation';
import OnePic from './common/OnePic';
import Face from './assets/face.jpeg';

const wordsApi = "https://random-words-api.vercel.app/word";

function Words() {
    const [wordData, setWordData] = useState({});

    const getWordsWithFetch = () => {
        fetch(wordsApi)
        .then (res => { 
           return res.json()}) 
        .then(data => {
            console.log(data)
            setWordData(data[0])
        });
        
    }

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
            desc='Medium: @simone-a-ballard'
            mainimg={Face}
            quote='
                "If you can make one heap of all your winnings
                And risk it on one turn of pitch-and-toss,
                And lose, and start again at your beginnings
                And never breathe a word about your loss;
                If you can force your heart and nerve and sinew
                To serve your turn long after they are gone,   
                And so hold on when there is nothing in you
                Except the Will which says to them: ‘Hold on!’

                If you can talk with crowds and keep your virtue,   
                Or walk with Kings—nor lose the common touch,
                If neither foes nor loving friends can hurt you,
                If all men count with you, but none too much;
                If you can fill the unforgiving minute
                With sixty seconds’ worth of distance run,   
                Yours is the Earth and everything that’s in it,   
                And—which is more—you’ll be a Man, my son!" If - Rudyard Kipling'
            />
            <div className="word__wrapper">
                <button onClick={() => getWordsWithFetch()}>Get Word</button>
                <div className="word__card">
               { wordData && <> 
                <h4>Word: {wordData.word}</h4>
                <h4>Definition: {wordData.definition}</h4>
                <h4>Pronunciation: "{wordData.pronunciation}"</h4>
                </> } 
                </div>
            </div>
        </div>
    )
}

export default Words
