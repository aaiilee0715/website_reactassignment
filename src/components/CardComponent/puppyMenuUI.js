import React from 'react';
import '../style/mockPuppy.css';


const PuppyMenuCenter = props => {
    return (
        <>
            <a href={props.link}>
                <img src={props.imgsrc} alt="Muzzles Logo" />
            </a>
        </>
    );
}
export default PuppyMenuCenter;