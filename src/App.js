// import './App.css';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//Pages To import
import MainPage from './pages/home';
import CardDisplay from './components/CardComponent/card';
import BusinessRedo from './pages/businessRedo';
import HamsterHotelSite from './pages/hamsterHotel';
import TopTenFavorite from './pages/topTenFav';
import MockPuppySite from './pages/mockPuppy';
import MockPuppyAbout from './pages/mockPuppyPages/mockPuppyAbout';
import MockPuppyMenu from './pages/mockPuppyPages/mockPuppyMenu';
import MockPuppyCatering from './pages/mockPuppyPages/mockPuppyCatering';
import MockPuppyPhoto from './pages/mockPuppyPages/mockPuppyPhoto';
import Top10MainPage from './pages/topTenFav';
import JosephFavsPage from './pages/top10FavePages/josephFavs';
import AboutJosephPage from './pages/top10FavePages/aboutJoseph';
import AnnFavsPage from './pages/top10FavePages/annFavs';
import AboutAnnPage from './pages/top10FavePages/aboutAnn';


class App extends Component {
  render() {
    return (
     
        <Router>
          <Route exact path="/">
            <MainPage />
            {/* <Cards /> */}
          </Route>

          <Route exact path="/" component={CardDisplay}>
          </Route>

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
          
          <Route exact path="/pages/mockPuppyPages/mockPuppyAbout">
          <MockPuppyAbout />
          </Route>

          <Route exact path="/pages/mockPuppyPages/MockPuppyMenu">
          <MockPuppyMenu />
          </Route>

          <Route exact path="/pages/mockPuppyPages/MockPuppyCatering">
          <MockPuppyCatering />
          </Route>

          <Route exact path="/pages/mockPuppyPages/MockPuppyPhoto">
          <MockPuppyPhoto />
          </Route>

          <Route exact path="/pages/mockPuppyPages/Top10MainPage">
          <Top10MainPage />
          </Route>

          <Route exact path="/pages/top10FavePages/josephFavs">
          <JosephFavsPage />
          </Route>

          <Route exact path="/pages/top10FavePages/aboutJoseph">
          <AboutJosephPage />
          </Route>

          <Route exact path="/pages/mockPuppyPages/AnnFavsPage">
          <AnnFavsPage />
          </Route>

          <Route exact path="/pages/top10FavePages/aboutAnn">
          <AboutAnnPage />
          </Route>

        </Router>
    );
  }
}
export default App;
