import React from 'react';
import { Component } from 'react';

import '../style/hamster.css';
import HamsterAmenitesCenter from './hamsterAmenitiesUI';
import Hour from '../images/hamsterImage/24hour.png';
import Breakfast from '../images/hamsterImage/breakfast.png';
import Valet from '../images/hamsterImage/valet.png';
import Pool from '../images/hamsterImage/pool.png';


class HamsterAmenitiesDisplay extends Component {
    render() {
        return (
            <>
                <div className="row d-flex justify-content-center mt-3">

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <HamsterAmenitesCenter
                            imgsrc={Hour}
                            text="24 Hour Room Service" />
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <HamsterAmenitesCenter
                            imgsrc={Breakfast}
                            text="Complimentary Breakfast" />
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <HamsterAmenitesCenter
                            imgsrc={Valet}
                            text="Valet Parking" />
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <HamsterAmenitesCenter
                            imgsrc={Pool}
                            text="Beachside Pool" />
                    </div>

                </div>
            </>

        );
    }
}
export default HamsterAmenitiesDisplay;
