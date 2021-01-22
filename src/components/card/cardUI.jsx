
import React from 'react';
import businessPix from '../images/businessPix.png';
import './card.css';

const Card = props => {
    return (
        <div className="col-md-4">
            <div className="card text-center">
                <div className="overflow">
                    <img src={businessPix} alt="Business Redevolpment"className='card-img-top' />
                    <div className="card-body text-dark">
                        <h4 className="card-title">Business Redevlopment Website</h4>
                        <p className="card-text text-secondary">In this team project, we were given a choice to choose a local business and redevelop their website</p>
                        <a href="#" className="btn btn-outline-success">Go To Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;