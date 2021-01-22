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
import Card from './components/card/card';
import BusinessRedo from './pages/businessRedo';
import HamsterHotelSite from './pages/hamsterHotel';


class App extends Component {
  render () {
    return (
    <Router>
      <Route path="/" component={MainPage} />
      <Route path="/" component={Card} />
      <Route path="/pages/businessRedo.js" compontent={BusinessRedo} />
      <Route path="/pages/hamsterHotel.js" compontent={HamsterHotelSite} />
    </Router>
    );
  }
}

export default App;
