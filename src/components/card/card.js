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
        <Card imgsrc={poppyPix} />
        <div className="col-md-3"></div>
        <Card imgsrc={hamsterHotelPix} />
        <div className="col-md-3"></div>
        <Card imgsrc={multiPix}/>
        <div className="col-md-3"></div>
        <Card imgsrc={puppyPix}/>
        
         </div>
        </div>




    );
    } 
}
export default Cards;









