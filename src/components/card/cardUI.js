
import React from 'react';
import {Button} from 'react-bootstrap';
import './card.css';

import BusinessRedo from '../../pages/businessRedo';

const Card = props => {
    console.log(props);
    return (

        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image" className='card-img-top' />
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">{props.text}</p>
                    <Button href={props.btn} className="btn btn-outline-success">Go To Project</Button>
                </div>
            </div>
        </div>


    );
}
export default Card;