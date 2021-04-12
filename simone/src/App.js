import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import CV from './CV';
import Words from './Words';
import Glitches from './Glitches';
import Contact from './Contact';
import Footer from './Footer';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
  
    <Switch>
      <Route path='/linkedin' component={() => {
        window.location.href = 'www.linkedin.com/in/simoneaballard';
        return null;
      }}/>
      <Route path='/github' component={() => {
        window.location.href = 'www.github.com/simonesquad';
        return null;
      }}/>
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
