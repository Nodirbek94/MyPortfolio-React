import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={ContactPage} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
