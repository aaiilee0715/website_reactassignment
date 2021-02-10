import React from 'react';
import '../style/business.css';

const CovidAreaCenter = props => {
    return (
        <>
                    <h2 className="updateText">{props.updateText}</h2>
                    <p id="openText">{props.openText}</p>
                    <h3 id="upService">{props.upService}</h3>              
        </>
    );
}
export default CovidAreaCenter;