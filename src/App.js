import './App.css';
import React, { Component } from 'react';

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
import TopTenFavorite from './pages/topTenFav';
import MockPuppySite from './pages/mockPuppy';

class App extends Component {
  render() {
    return (
      <Router>

        <Route exact path="/" component={MainPage} />
        <Route exact path="/" component={Card} />

        <Route exact path="/pages/businessRedo">
        <BusinessRedo />
        </Route>

        <Route exact path="/pages/hamsterHotel">
        <HamsterHotelSite />
        </Route>

        <Route exact path="/pages/topTenFav">
        <TopTenFavorite />
        </Route>

        <Route exact path="/pages/mockPuppy">
        <MockPuppySite />
        </Route>


      </Router>
    );
  }
}

export default App;
