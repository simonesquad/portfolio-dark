import React from 'react';
import Layout from "../src/layout/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Worker } from '@react-pdf-viewer/core';
//Components
import CV from './CV';
import Words from './Words';
import Glitches from './Glitches';
import Contact from './Contact';
import Navigation from './Navigation';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Greeting from './common/Greeting';


function App() {
  return (
    <>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
    <BrowserRouter>
    <Layout>
    <Navigation 
            oneBtnTxt='S'
            oneBtnLink='/'
            twoBtnTxt='Credentials'
            twoBtnLink='/cv'
            threeBtnTxt='Words'
            threeBtnLink='/words'
            fourBtnTxt='Glitches'
            fourBtnLink='/glitches'
            fiveBtnTxt='>>>'
            fiveBtnLink='/contact'
            />
    <div className="App">
    <Switch>
      <Route exact path='/thankyou' component={Greeting} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/glitches' component={Glitches} />
      <Route exact path='/words' component={Words} />
      <Route exact path='/cv' component={CV} />
      <Route exact path='/' component={Dashboard} />
    </Switch>
    </div>
    <Footer />
    </Layout>
    </BrowserRouter>
    </Worker>
    
    </>
  );
}

export default App;
