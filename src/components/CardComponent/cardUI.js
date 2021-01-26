
import React from 'react';
import { Button } from 'react-bootstrap';



import './card.css';



const Card = props => {
    console.log(props);
    return (
        <section className="homeCardBody">
            <div className="homeCard text-center">
                <div className="overflow h-100">
                    <img src={props.imgsrc} alt="Image" className='homeCard-img' />
                    <div className="homeCard-body text-dark">
                        <h4 className="homeCard-title">{props.title}</h4>
                        <p className="homeCard-text">{props.text}</p>
                        <Button href={props.projectBtn} className="projectBtn btn-sm btn-info">Go To Project</Button>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Card;