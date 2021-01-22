import React, { Component } from 'react';
import Card from './cardUI.jsx';


//import images
import poppyPix from '../images/poppyPix.png';
import hamsterHotelPix from '../images/hamster.png';
import multiPix from '../images/multiPix.png';
import puppyPix from '../images/puppyPix.png';


class Cards extends Component {
    render() {
        return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="row">
        <div className="col-md-7"></div>
        <Card imgsrc={poppyPix} title="Business Redevelpment Website"/>
        <div className="col-md-3"></div>
        <Card imgsrc={hamsterHotelPix} title="Hamster Hotel" />
        <div className="col-md-3"></div>
        <Card imgsrc={multiPix} title="Top 10 Favorites"/>
        <div className="col-md-3"></div>
        <Card imgsrc={puppyPix} title="Mock Puppy Restaurant"/>
        
         </div>
        </div>




    );
    } 
}
export default Cards;









