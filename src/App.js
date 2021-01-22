import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Pages To import
import MainPage from './pages/home';



class App extends Component {
  render () {
    return (
    <Router>
      <Route path="/" component={MainPage} />
    </Router>
    );
  }
}

export default App;
