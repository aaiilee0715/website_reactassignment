import React from 'react';

import '../style/hamster.css';

const HamsterPackageCenter = props => {
    return (
        <div className="hamsterHat">
            <div className="card h-100">
                <img src={props.imgsrc} className="img-fluid" />
                <h2 className="packagesTitle">{props.title}</h2>
                <h5 className="startingPrice">{props.text}</h5>
                <p className="packageMid mt-3">{props.mid}</p>
            </div>
        </div>
    );
}
export default HamsterPackageCenter;