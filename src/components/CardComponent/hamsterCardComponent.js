import React from 'react';
import { Component } from 'react';
import HamsterCardComponent from './hamsterCardUI';

import '../style/hamster.css';


import Room1 from '../images/hamsterImage/room1.jpg';
import Room2 from '../images/hamsterImage/room2.jpg';
import Room3 from '../images/hamsterImage/room3.jpg';

class HamsterCardDisplay extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                    
                        <div className="col-sm-3 py-4 m-3">
                            <HamsterCardComponent imgsrc={Room1}
                                title="Queen Room"
                                text="850 SQ FT room with city view"
                                lists1="One queen size bed"
                                lists2="Seed Bar, fireplace and large balcony"
                                lists3="Small kitchen with a refrigerator and stove"
                                
                            />
                        </div>

                        <div className="col-sm-3 py-4 m-3">
                            <HamsterCardComponent imgsrc={Room2}
                                title="King Room"
                                text="950 SQ FT room with beach view"
                                lists1="One king size bed"
                                lists2="Seed Bar, fireplace and large balcony"
                                lists3="Small kitchen with a refrigerator and stove"
                            />
                        </div>

                        <div className="col-sm-3 py-4 m-3">
                            <HamsterCardComponent imgsrc={Room3}
                                title="Beach Side Suite"
                                text="1500 SQ FT Suite with beach view"
                                lists1="One California king size bed"
                                lists2="Seed Bar, fireplace and large balcony"
                                lists3="Small kitchen with a refrigerator and stove"
                                lists4="Full kitchen with a refrigerator, stove, and island"
                            />
                        </div>
                    </div>
                </div>
          
        );
    }
}

export default HamsterCardDisplay;