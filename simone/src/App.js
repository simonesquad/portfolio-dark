import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import CV from './components/CV';
import Words from './components/Words';
import Glitches from './components/Glitches';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
