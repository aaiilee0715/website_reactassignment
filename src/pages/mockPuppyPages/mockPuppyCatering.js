import React from 'react';
import '../../components/style/mockPuppy.css';
import PuppyCateringDisplay from '../../components/CardComponent/puppyCateringCard';

const PuppyCateringPage = () => {
    return (
        <>
         <div className="puppyBody align-item-start ">
                <a className="nav-link" href='/'>Back To Main</a>
            </div>
                    <PuppyCateringDisplay />              
        </>
    );
}
export default PuppyCateringPage;