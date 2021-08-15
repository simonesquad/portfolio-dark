import React from 'react';
import Navigation from './Navigation';
import Button from './common/Button';
import SCV from './document/simone_ballard.pdf';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import CVS from './document/simone_ballard.pdf';
import CV2 from './document/2020_SBallard_CV.pdf';
import './CV.css'

export default function CV() {
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
        <div className="cvs">
          <Viewer
            fileUrl={SCV}
          />
        </div>
        <div className="cv_container">
        <Button text="Now" link={CVS} rel="noreferrer" target = "_blank" />
        <Button text="Then" link={CV2} rel="noreferrer" target = "_blank" />
      </div>
    </div>
        );
    }
