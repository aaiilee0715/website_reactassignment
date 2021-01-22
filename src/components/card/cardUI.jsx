
import React from 'react';

import './card.css';

const Card = props => {
    return (
       
            <div className="card text-center">
                <div className="overflow">
                    <img src={props.imgsrc} alt="Image"className='card-img-top' />
                    <div className="card-body text-dark">
                        <h4 className="card-title">Business Redevlopment Website</h4>
                        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        dipiscing elit pellentesque habitant morbi tristique senectus et netus.</p>
                        <a href="#" className="btn btn-outline-success">Go To Project</a>
                    </div>
                </div>
            </div>
      
    );
}
export default Card;