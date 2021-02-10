import React, { Component } from 'react';
import CovidAreaCardComponent from '../CardComponent/covidAreaUI';

import '../style/business.css';

class CovidAreaDisplay extends Component {
    render() {
        return (
            <>
            
                <div id="innercovidArea">
                    <div className="row">
                        <div className="col-lg-6">
                            <CovidAreaCardComponent
                                updateText="COVID-19 UPDATES"
                            />
                        </div>
                        <div className="col-lg-6">
                    <p id="openText">Open today until 7:00 PM</p>
                  </div>
                    </div>
                    <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <h3 id="upService">Updated Services</h3>
                  </div>
                    </div>
                    <div className="row outercovidArea">
                        <div className="col-lg-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-check addIconPad"></i>
                            <h5>Outdoor seating</h5>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-check addIconPad"></i>
                            <h5>Delivery</h5>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-check addIconPad"></i>
                            <h5>Phone Order</h5>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-check addIconPad"></i>
                            <h5>Take-Out</h5>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-check addIconPad"></i>
                            <h5>Sit-down dining</h5>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-check addIconPad"></i>
                            <h5>Curbside pickup</h5>
                        </div>
                    </div>
                </div>
            
            






            </>
        );
    }
}
export default CovidAreaDisplay;