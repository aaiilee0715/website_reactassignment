import React from 'react';
import '../style/mockPuppy.css';

const PuppyCateringCenter = props => {
    return (
        <>
            <a href={props.link}>
                <img src={props.imgsrc} alt="Muzzles Logo" />
            </a>
        </>
    );
}
export default PuppyCateringCenter;