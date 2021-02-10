import React, { Component } from 'react';
import '../style/mockPuppy.css';
import PuppyMenuCardComponent from '../CardComponent/puppyMenuUI';
import MuzzleLogoPix from '../images/puppyMockupImage/MuzzlesLogo.png';
import MenuBeef from '../images/puppyMockupImage/menubeef.jpg';
import CompanyLogoPix from '../images/puppyMockupImage/CompanyLogo.png';
import MenuSeafoodPix from '../images/puppyMockupImage/menuseafood.jpg';
import MenuMeatPix from '../images/puppyMockupImage/menumeat.jpg';
import MenuDessertPix from '../images/puppyMockupImage/menudesserts.jpg';

class PuppyMenuDisplay extends Component {
    render() {
        return (
            <>
                <body className="puppyBody">
                    <div className="container containerwidth">
                        <nav className="puppyNavbar navbar navbar-light bg-light col-xl-auto col-lg-12 col-md-12 col-sm-12 ">
                            <PuppyMenuCardComponent
                                imgsrc={MuzzleLogoPix}
                                link="/pages/mockPuppy"
                            />
                            <ul className="nav justify-content-end">
                                <li className="nav-item puppyNavText">
                                    <a className="nav-link puppyNavText" href="/pages/mockPuppyPages/mockPuppyAbout">About</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link puppyNavText" href="/pages/mockPuppyPages/MockPuppyMenu">Menu</a>
                                </li>
                                <li className="nav-item puppyNavText">
                                    <a className="nav-link puppyNavText" href="/pages/mockPuppyPages/MockPuppyCatering">Catering</a>
                                </li>
                                <li className="nav-item puppyNavText">
                                    <a className="nav-link puppyNavText" href="../pages/photos.html">Photos</a>
                                </li>
                            </ul>
                        </nav>
                        <br />
                    </div>

                    <div className="container mainContainer">
                        <div className="row py-2 d-flex justify-content-center">
                            <div className="col-lg-12 d-flex justify-content-center title font2 ">
                                <h1 className="largeText">Our Menu</h1>
                            </div>
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center py-2 px-2 cardPadding">
                                <div className="menuCard">
                                    <img src={MenuBeef} className="card-img-top" alt="..." />
                                    <div className="card-body card-body2">
                                        <div className="row margin1">
                                            <div className="col-12">
                                                <h5>
                                                    <b className="largeText font2">Sandwiches</b>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 py-1">
                                                <p className="smallText">All sandwiches come with an side of crispy fries</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText">Sizzling Steak Sandwich </h5>
                                                <p className="smallText">Open faced steak sandwich with grilled belle peppers and fried
                                                onions. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$15.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">

                                                <h5 className="largeText ">Tenderloin Sliders </h5>
                                                <p className="smallText">Three beef tenderloin sliders with horseradish cream and blackberry
                                                bbq. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$13.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Classic Chicken Panini </h5>
                                                <p className="smallText">Grilled chicken with Monterey jack, romaine lettuce, tomato, and
                                                cilantro. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$10.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Smoked Turkey Club </h5>
                                                <p className="smallText">Smoked deli turkey, maple bacon, cranberry aioli, lettuce and
                                                tomatoes. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$8.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Tuna Sandwich </h5>
                                                <p className="smallText">Tuna salad with sprouts, sliced tomatoes and cilantro lime mayo on
                                                toast. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$6.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-6 col-md-12 d-flex justify-content-center py-2 px-2 cardPadding">
                                <div className="menuCard">
                                    <img src={MenuSeafoodPix} className="card-img-top" alt="..." />
                                    <div className="card-body card-body2">
                                        <div className="row margin1">
                                            <div className="col-12">
                                                <h5>
                                                    <b className="largeText font2">Seafood</b>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 py-1">
                                                <p className="smallText">All seafood comes with a side of rice pilaf and grilled vegetables </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Honey Shrimp Skewers </h5>
                                                <p className="smallText">Ten honey glazed shrimps grilled with sesame seeds and rosemary. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$15.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Tenderloin Sliders </h5>
                                                <p className="smallText">Three beef tenderloin sliders with horseradish cream and blackberry
                                        bbq. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$13.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Grilled Salmon </h5>
                                                <p className="smallText">Salmon grilled in a lime butter sauce.</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$10.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Parmesan Fish Sticks </h5>
                                                <p className="smallText">Sliced salmon in parmesan breading served with lemon dill tartar
                                        sauce.</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$8.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center py-2 px-2 cardPadding">
                                <div className="menuCard">
                                    <img src={MenuMeatPix} className="card-img-top" alt="..." />
                                    <div className="card-body card-body2">
                                        <div className="row margin1">
                                            <div className="col-12">
                                                <h5>
                                                    <b className="largeText font2">On the grill</b>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="smallText">Served with corn, cheddar biscuits, and your choice of coleslaw or potato salad.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Baby Back - Full Rack </h5>
                                                <p className="smallText">A full rack of pork babyback ribs grilled and glazed with
                                                blackberry bbq. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$19.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Baby Back - Half Rack </h5>
                                                <p className="smallText">A half rack of pork babyback ribs grilled and glazed with
                                                blackberry bbq.</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$13.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Boneless Ribeye </h5>
                                                <p className="smallText">A three inch thick boneless ribeye grilled in a rosemary rub and
                                                butter</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$25.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Smoked Turkey Club </h5>
                                                <p className="smallText">Smoked deli turkey, maple bacon, cranberry aioli, lettuce and
                                                tomatoes. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$8.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Tuna Sandwich </h5>
                                                <p className="smallText">Tuna salad with sprouts, sliced tomatoes and cilantro lime mayo on
                                                toast.</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$6.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center py-2 px-2 cardPadding">
                                <div className="menuCard" >
                                    <img src={MenuDessertPix} className="card-img-top" alt="..." />
                                    <div className="card-body card-body2">
                                        <div className="row margin1">
                                            <div className="col-12">
                                                <h5>
                                                    <b className="largeText font2">Desserts</b>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="smallText">A shot of esspresso can be added to any dessert for an additional $2.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Double Walnut Brownies </h5>
                                                <p className="smallText">Two brownies with a walnut crust, ice cream and chocolate sauce. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$8.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Cheese Cake with Chocolate </h5>
                                                <p className="smallText">Sauce Cheesecake with ice cream, chocolate shavings and chocolate
                                                sauce.</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$7.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Tripple Chocolate </h5>
                                                <p className="smallText">Brownie A tripple chocolate brownie served with vanilla ice cream
                                                and walnuts.</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$6.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">House Made Shaved Gelato and Cookies </h5>
                                                <p className="smallText"> Your choice of shaved gelato with whole cookies. Options change
                                                daily.</p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$5.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-10 align-item-end margin2">
                                                <h5 className="largeText ">Grilled Peaches and Ice Cream </h5>
                                                <p className="smallText">Grilled peaches in cinnamon and brown sugar glaze with ice
                                                cream. </p>
                                            </div>
                                            <div className="col-lg-2 col-sm-12 largeText margin3">
                                                <br />
                                                <h5>$4.99</h5>
                                            </div>
                                            <div className="col-12">
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>











                        </div>
                    </div>
                    <footer className="container">
                        <div className="puppyFooter">
                            {/* <!-- Grid row--> */}
                            <div className="row py-4 d-flex align-items-center">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0 footerPad">
                                    <h6 className="puppyFooterText">1357 Mutt Street, Rottweiler CA. 12345 <br /> Phone: 123-456-7890</h6>
                                </div>
                                {/* <!-- Grid column --> */}
                                <div className="col-md-6 col-lg-7 col-sm-12 text-center text-md-right logo-container footerPad">
                                    <img src={CompanyLogoPix} alt="companyLogo" className="img-fluid" height="32px" width="100px" />
                                    <p className="puppyFooterText">Copyright © Muzzles Restaurant</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                        </div>
                    </footer >
                </body >













            </>
        );
    }
}
export default PuppyMenuDisplay;