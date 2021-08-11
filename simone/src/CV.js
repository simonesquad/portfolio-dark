import React, { Component } from 'react';
import { Document } from 'react-pdf/dist/umd/entry.webpack';
import Navigation from './Navigation';
// import CVS from './document/SB_xx21.docx';
// import CV2 from './document/2020_SBallard_CV.pdf';
// import './CV.css'

export default class CV extends Component {

    render() {

    return (
        <div>
         <Navigation 
            oneBtnTxt='//'
            oneBtnLink='/'
            twoBtnTxt='Words//'
            twoBtnLink='/words'
            threeBtnTxt='Glitches//'
            threeBtnLink='/glitches'
            fourBtnTxt='Contact//'
            fourBtnLink='/contact'
            />
          <Document
            file="simone_ballard.pdf"
          ></Document>
        {/* <div className="cv_container">
        <button className="cv_buttons">
          <a href = {CVS} rel="noreferrer" target = "_blank">Software</a>
        </button>
        <button className="cv_buttons">
          <a href = {CV2} rel="noreferrer" target = "_blank">Legacy</a>
        </button>
      </div> */}
    </div>
        );
    }
}
