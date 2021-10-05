import React from 'react';
import Navigation from './Navigation';
import Button from './common/Button';
import SCV from './document/S_B_.pdf';
import CVS from './document/S_B_.pdf';
import CV2 from './document/2020_SBallard_CV.pdf';
import './CV.css'
//Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Styles for pdf
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function CV() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div classname="whole_cv_view">
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
            plugins={[
              defaultLayoutPluginInstance
            ]}
          />
        </div>
        <div className="cv_container">
        <Button text="Now>>" link={CVS} rel="noreferrer" target = "_blank" />
        <Button text="Then>>" link={CV2} rel="noreferrer" target = "_blank" />
      </div>
    </div>
        );
    }
