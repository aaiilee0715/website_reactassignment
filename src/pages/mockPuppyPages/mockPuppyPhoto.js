import React from 'react';
import '../../components/style/mockPuppy.css';

import PuppyPhotoDisplay from '../../components/CardComponent/puppyPhotoCard';

const PuppyCateringCenter = () => {
    return (
        <>
        <div className="puppyBody align-item-start ">
                <a className="nav-link" href='/'>Back To Main</a>
            </div>
                    <PuppyPhotoDisplay />
        </>
    );
}
export default PuppyCateringCenter;