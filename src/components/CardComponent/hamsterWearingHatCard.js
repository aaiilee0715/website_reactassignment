import React from 'react';
import { Component } from 'react';
import HamsterHatCardComponent from './hamsterHatUI';

import '../style/hamster.css';

import HamsterHome from '../images/hamsterImage/hamsterhomejpg.jpg';
import AwardFinest from '../images/hamsterImage/awardfinest.png';
import AwardGenuine from '../images/hamsterImage/awardgenuine.png';
import AwardSatisfaction from '../images/hamsterImage/awardsatisfaction.png';

class HamsterWearingHatDisplay extends Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <HamsterHatCardComponent imgsrc={HamsterHome} />
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                    <HamsterHatCardComponent
                        title="Welcome to a hamster's paradise"
                        text="Nestled in the heart of Cavia California, La Petite Maison is a luxury
                hotel designed for the small mammal with extravagance in mind. Escape to the warm comforts of stunning rooms, a relaxing spa,
                and a pool with a beach side view. Inspired by the warm beauty of the California Coast, we invite you to enjoy
                  the rich accommodations along with our unmatched luxury. Discover the satisfaction of indulging in our quality rooms, and thank you for choosing La Petite Maison."
                    />

                    <div className="row m-5">
                        <div className="col-xl-auto col-lg-12 col-md-12 col-sm-12 d-flex flex-row ">
                            <HamsterHatCardComponent imgsrc={AwardFinest} />
                            <HamsterHatCardComponent imgsrc={AwardGenuine} />
                            <HamsterHatCardComponent imgsrc={AwardSatisfaction} />
                        </div>
                    </div>
                </div>
            </>
        );

    }
}
export default HamsterWearingHatDisplay;
