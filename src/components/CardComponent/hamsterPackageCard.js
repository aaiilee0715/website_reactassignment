import React from 'react';
import { Component } from 'react';
import HamsterCardComponent from './hamsterPackageUI';

import '../style/hamster.css';
import HamsterWedding from '../images/hamsterImage/hamsterwedding.jpg';
import HamsterSpring from '../images/hamsterImage/hamsterspring.jpg';
import HamsterCheese from '../images/hamsterImage/hamstercheese.jpg';


class HamsterPackageDisplay extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md">
                        <HamsterCardComponent imgsrc={HamsterWedding} />
                    </div>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                        <HamsterCardComponent
                            title="Beach Wedding package"
                            text="Starting US $1,500.00"
                            mid="Feel the warmth of the beach as the flames in your hearts ignite during our
                            romantic beach side wedding. All wedding packages include catering, an open bar, and one
                            tier wedding cake (9 inch Vanilla standard cake). A private dinner for your closets family
                        members and friends will be provided after the ceremony."
                        />
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <HamsterCardComponent
                                title="Full Bloom Package"
                                text="Starting US $1,000.00"
                                mid="Enjoy the shade of our cherry trees as you join us during our spring time
                            celebration. We invite you to our orchards for cherry, strawberry, and apple picking
                            that is open all day. We end each evening with fresh, vegetable centric dinners along with a
                        live show from local musicians."
                            />
                        </div>
                        <div className="col-md py-2">
                            <HamsterCardComponent imgsrc={HamsterSpring} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <HamsterCardComponent imgsrc={HamsterCheese} />
                    </div>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                        <HamsterCardComponent
                            title="Cheese and Seed Tour Package"
                            text="Starting US $1,200.00"
                            mid="Immerse yourself in the flavors of Cavia with our Cheese and Seed tour. We
                            consulted with connoisseurs from around the globe to bring you the best flavors that
                            nature has to offer, and create our cheeses right here at our local creamery. Cheese and seeds
                        are served all day and nightly spa treatment is provided after dinner."
                        />
                    </div>
                </div>

            </>

        );
    }
}
export default HamsterPackageDisplay;