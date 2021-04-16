import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import CV from './CV';
import Words from './Words';
import Glitches from './Glitches';
import Contact from './Contact';
import Footer from './Footer';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/glitches' component={Glitches} />
      <Route exact path='/words' component={Words} />
      <Route exact path='/cv' component={CV} />
      <Route exact path='/' component={Dashboard} />
    </Switch>

    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
