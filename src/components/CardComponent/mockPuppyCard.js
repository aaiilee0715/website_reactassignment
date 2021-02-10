import React, { Component } from 'react';
import MockPuppyCardComponent from '../CardComponent/mockPuppyUI';
import '../style/mockPuppy.css';

import MuzzleLogoPix from '../images/puppyMockupImage/MuzzlesLogo.png';
import HomeHeroPix from '../images/puppyMockupImage/homeHero.jpg';
import HomeSinglePix from '../images/puppyMockupImage/homeSingle.jpg';
import HomeImagePix from '../images/puppyMockupImage/HomeImage.jpg';
import CompanyLogoPix from '../images/puppyMockupImage/CompanyLogo.png';

class MockPuppyDisplay extends Component {
    render() {
        return (
            <>
                <body class="puppyBody">
                    <div class="container containerwidth">
                        <nav class="puppyNavbar navbar navbar-light bg-light col-xl-auto col-lg-12 col-md-12 col-sm-12 ">
                            <MockPuppyCardComponent
                                imgsrc={MuzzleLogoPix}
                                href="/pages/mockPuppy"
                            />
                            <ul class="nav justify-content-end">
                                <li class="nav-item puppyNavText">
                                    <a class="nav-link puppyNavText" href="/pages/mockPuppyPages/mockPuppyAbout">About</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link puppyNavText" href="../pages/foodMenu.html">Menu</a>
                                </li>
                                <li class="nav-item puppyNavText">
                                    <a class="nav-link puppyNavText" href="../pages/catering.html">Catering</a>
                                </li>
                                <li class="nav-item puppyNavText">
                                    <a class="nav-link puppyNavText" href="../pages/photos.html">Photos</a>
                                </li>
                            </ul>
                        </nav>
                        <br />
                    </div>
                    <div>
                        <img className="heroImage pt" src={HomeHeroPix} alt="Restaraunt Seating" />
                    </div >
                    <div className="container-fluid marginTop d-flex justify-content-around">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
                                <img className="single" src={HomeSinglePix} alt="Food Options" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="rectangle">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <h1 className="textColor font2 pt-4 pl-4">Muzzles Sandwiches & Grill</h1>
                                                <p className="regularFont pl-4 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="homeImg" src={HomeImagePix} alt="Food options" />
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










                </body>




            </>

        );
    }
}
export default MockPuppyDisplay;