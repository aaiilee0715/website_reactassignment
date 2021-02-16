import React from 'react';
import '../style/business.css';

const BusinessMenuCenter = props => {
    return (
        <>
          
                <h2 className="title">{props.title}</h2>
                <div className="row d-flex justify-content-between">
                    <h3 className="title2">{props.title2}</h3>
                    <h3 className="title3">{props.title3}</h3>           
                    <p className="comment">{props.comment}</p>
                   
                </div>
         

        </>
    );
}
export default BusinessMenuCenter;