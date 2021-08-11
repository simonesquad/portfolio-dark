import React from 'react';
import Navigation from './Navigation';
import SCV from './document/simone_ballard.pdf';
import { Viewer } from '@react-pdf-viewer/core';
// import Single from "./common/single-page";
import '@react-pdf-viewer/core/lib/styles/index.css';

// import CVS from './document/SB_xx21.docx';
// import CV2 from './document/2020_SBallard_CV.pdf';
// import './CV.css'

export default function CV() {
    return (
        <div className="portfolio">
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
          {/* <Single pdf={SCV} /> */}
          <Viewer
            fileUrl={SCV}
          />;
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
