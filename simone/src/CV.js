import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Button from './common/Button';
import CVS from './document/S_B_.pdf';
import CV2 from './document/2020_SBallard_CV.pdf';
import './CV.css'


export default function CV() {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <div classname="whole_cv_view">
        <div className="cvs">
        <Document file={CVS} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        </div>
        <div className="cv_container">
        <Button text="Now>>" link={CVS} rel="noreferrer" target = "_blank" />
        <Button text="Then>>" link={CV2} rel="noreferrer" target = "_blank" />
      </div>
    </div>
        );
    }
