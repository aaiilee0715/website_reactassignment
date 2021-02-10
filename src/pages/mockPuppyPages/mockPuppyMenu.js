import React from 'react';
import '../../components/style/mockPuppy.css';

import PuppyMenuDisplay from '../../components/CardComponent/puppyMenuCard';


const PuppyMenuCenter = () => {
    return (
        <>
        <div className="puppyBody align-item-start ">
                <a className="nav-link" href='/'>Back To Main</a>
            </div>
                    <PuppyMenuDisplay />
        </>
    );
}
export default PuppyMenuCenter;