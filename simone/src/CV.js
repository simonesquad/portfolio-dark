import React, { Component } from 'react';
import CVS from './document/2021_SB_CV.docx';
import CV2 from './document/2020_SBallard_CV.pdf';
import Navigation from './Navigation';

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
        <div className="cv_container">
          <a href = {CVS} target = "_blank">Download Software Resume</a>
          <a href = {CV2} target = "_blank">Download Legacy Resume</a>
      </div>
    </div>
        );
    }
}
