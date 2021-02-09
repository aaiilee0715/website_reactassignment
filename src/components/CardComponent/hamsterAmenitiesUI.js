import React from 'react';
import '../style/hamster.css';

const HamsterAmenitesCenter = props => {
    return (
        <div className="amenitiesBG">
            <div className="w-171 h-180">
              <img className="d-sm-none d-md-flex" src={props.imgsrc} alt="amenities" className="img-fluid" />
              <p className="amenitiesText mt-4">{props.text}</p>
            </div>
            </div>
    );
}
export default HamsterAmenitesCenter;