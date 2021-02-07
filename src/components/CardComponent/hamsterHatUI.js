import React from 'react';
import '../style/hamster.css';

const HamsterHatCenter = props => {
    return(
        <div className="container-fluid hamsterHat">
            <div className="row">
            <img src={props.imgsrc} className="img-fluid" />
            <h1 className="hamsterWearingHatTitle">{props.title}</h1>
            <p className="hamsterWearingHatText mt-3">{props.text}</p>
        </div>
    </div>
    );
}
export default HamsterHatCenter;