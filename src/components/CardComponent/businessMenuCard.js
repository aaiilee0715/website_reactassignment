import React, { Component } from 'react';
import BusinessMenuCardComponent from '../CardComponent/businessMenuUI';

import '../style/business.css';

class BusinessMenuDisplay extends Component {
    render() {
        return (
            <>
                <div className="container-fluid pt-5" >
                    <div className="row d-flex justify-content-center">

                        <div className="col-lg-6 d-flex justify-content-center">
                            <div id="leftSide" className="card">
                                <div className="card-body">
                                    {/* <!------------ Title Area------------ --> */}
                                  
                                        <div className="row d-flex justify-content-center pb-4">
                                            <BusinessMenuCardComponent
                                                title="COFFEE"
                                            />
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>French Press Coffee</h3>
                                            <h3>$ 5.00</h3>
                                        </div>
                                
                                    {/* <!-- Container that contains more text --> */}
                                    
                                        <div className="row d-flex justify-content-between">
                                            <h3>Box of Coffee</h3>
                                            <h3>$17.00</h3>
                                        </div>
                                        <div className="row">
                                            <BusinessMenuCardComponent
                                                comment="Get 12-8oz. cups of coffee included with cream and sugar packets."
                                            />
                                        </div>
                                  
                                    {/* <!--New Items Tab --> */}
                                
                                        <div className="row d-flex justify-content-center pb-4">
                                            <h2 className="d-flex justify-content-center py-5">-DRIP COFFEE-</h2>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>8oz. Coffee</h3>
                                            <h3>$2.00</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Small Drip Coffee</h3>
                                            <h3>$2.50</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Medium Drip Coffee</h3>
                                            <h3>$3.00</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Large Drip Coffee</h3>
                                            <h3>$3.50</h3>
                                        </div>
                                   
                                </div>

                                {/* <!--New Items Tab --> */}
                             
                                    <div className="row d-flex justify-content-center pb-4">
                                        <h2 className="d-flex justify-content-center py-5">-POUR OVER-</h2>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Iced Pour Over</h3>
                                        <h3>$ 3.75</h3>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Pour Over Coffee</h3>
                                        <h3>$ 4.00</h3>
                                    </div>
                             
                                {/* <!--New Items Tab --> */}
                              
                                    <div className="row d-flex justify-content-center pb-4">
                                        <h2 className="d-flex justify-content-center py-5">-CAFE AU LAIT-</h2>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Small Cafe au Lait</h3>
                                        <h3>$ 3.00</h3>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Medium Cafe au Lait</h3>
                                        <h3>$ 3.25</h3>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Large Cafe au Lait</h3>
                                        <h3>$ 4.00</h3>
                                    </div>
                           
                                {/* <!--New Items Tab --> */}
                                <div className="pb-5">
                                    <div className="row d-flex justify-content-center pb-4">
                                        <h2 className="d-flex justify-content-center py-5">-EUREKA COFFEE-</h2>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Small Eureka Coffee</h3>
                                        <h3>$ 3.25</h3>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Medium Eureka Coffee</h3>
                                        <h3>$ 3.75</h3>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <h3>Large Eureka Coffee</h3>
                                        <h3>$ 4.25</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Split for the 2 sides --> */}
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div id="rightSide" className="card">
                                <div className="card-body">
                                  
                                        <div className="row d-flex justify-content-center pb-4">
                                            <h2>BREAKFAST</h2>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Bagel with Cream Cheese</h3>
                                            <h3>$4.00</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Oatmeal</h3>
                                            <h3>$4.00</h3>
                                        </div>
                            
                                  
                                        <div className="row d-flex justify-content-between">
                                            <h3>Garden Bagel</h3>
                                            <h3>$ 5.50</h3>
                                    
                                        <div className="row">
                                            <div id="garlicSandwich m-4" >
                                                <p>Garlic pesto cream cheese, tomato, arugula, topped with everything seasoning.</p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                        <div className="row d-flex justify-content-between pb-3">
                                            <h3>Custom B-Fast Sandwich</h3>
                                            <h3>$6.00</h3>
                                        </div>
                     
                                 
                                        <div className="row d-flex justify-content-between">
                                            <h3>Berkeley Bagel</h3>
                                            <h3>$ 6.50</h3>
                                        </div>
                                        <div className="row">
                                            <div className="addzeroPad">
                                                <p>Choice of bagel, Avocado hummus topped with chopped cucumber, onion, sprouts,
                          and house made chill seasoning.</p>
                                            </div>
                                        </div>
                                
                                   
                                        <div className="row d-flex justify-content-between pb-3">
                                            <h3>Dream Sandwich</h3>
                                            <h3>$ 6.65</h3>
                                 
                                        <div className="row">
                                            <div className="addzeroPad">
                                                <p>Croissant with pesto cream cheese, sausage, provolone cheese, poached egg,
                          and topped with arugula.</p>
                                            </div>
                                        </div>
                                    </div>
                             
                                        <div className="row d-flex justify-content-between">
                                            <h3>No Meat Breakfast Burrito</h3>
                                            <h3>$7.00</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Breakfast Bowl</h3>
                                            <h3>$7.50</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Breakfast Ham Burrito</h3>
                                            <h3>$7.50</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Breakfast Sausage Burrito</h3>
                                            <h3>$7.50</h3>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <h3>Breakfast Bacon Burrito</h3>
                                            <h3>$7.50</h3>
                                        </div>
                                        <div id="menuContPad" className="container d-flex justify-content-center align-items-center">
                                            <button id="fullMenuOrderBtn" href="https://orders.cake.net/11157251"
                                                target="_blank" className="hvr-right">FULL MENU</button>
                                        </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div >
                </div >

            </>
        );
    }
}
export default BusinessMenuDisplay;