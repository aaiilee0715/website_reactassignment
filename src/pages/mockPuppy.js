import React from 'react';
import '../components/style/mockPuppy.css';
import MockPuppyDisplay from '../components/CardComponent/mockPuppyCard';


const MockPuppySite = () => {
    return (
        <>
            <div className="puppyBody align-item-start ">
                <a className="nav-link" href='/'>Back To Main</a>
            </div>
                    <MockPuppyDisplay />                       
        </>
    );
}
export default MockPuppySite;