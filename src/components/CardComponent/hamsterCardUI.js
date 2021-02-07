import React from 'react';
import { Button } from 'react-bootstrap';

import '../style/hamster.css';

const HamsterCard = props => {
    return (
        <div className="overflown">
            <div className="card h-100">
                <img src={props.imgsrc} alt="Image 1" className="img-fluid" />
                <div className="hamsterCard-body py-4 m-3">
                    <h5 className="hamsterCardTitle">{props.title}</h5>
                    <p className="hamsterCardText">{props.text}</p>
                    <li className="hamsterLists1">{props.lists1}</li>
                    <li className="hamsterLists2">{props.lists2}</li>
                    <li className="hamsterLists3">{props.lists3}</li>
                    <li className="hamsterLists4">{props.lists4}</li>
                    <Button className="ourRoom btn-lg btn-primary mx-auto d-block mt-3 ">Reserve</Button>
                </div>
            </div>
        </div>


    );
}
export default HamsterCard;