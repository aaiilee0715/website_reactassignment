import React from 'react';
import '../../components/style/mockPuppy.css';

import PuppyAboutDisplay from '../../components/CardComponent/puppyAboutCard';

const PuppyAboutPage = () => {
    return (
        <>
         <div className="puppyBody align-item-start ">
                <a className="nav-link" href='/'>Back To Main</a>
            </div>
                    <PuppyAboutDisplay />              
        </>
    );
}
export default PuppyAboutPage;