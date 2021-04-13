import React, { useState, useEffect } from 'react';
import './Words.css'
//Components
import Navigation from './Navigation';
import OnePic from './common/OnePic';
import Face from './assets/face.jpeg';

const wordsApi = "https://random-words-api.vercel.app/word";

function Words() {
    const [wordData, setWordData] = useState({});

    // useEffect(() => {
    //     getWordsWithFetch();
    // }, []);

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
            desc='Check Out My Latest on Medium @simone-a-ballard'
            mainimg={Face}
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
