import React, { Component } from 'react';
import '../style/mockPuppy.css';
import PuppyPhotoCardComponent from '../CardComponent/puppyPhotoUI';
import MuzzleLogoPix from '../images/puppyMockupImage/MuzzlesLogo.png';
import CompanyLogoPix from '../images/puppyMockupImage/CompanyLogo.png';
import Photo1 from '../images/puppyMockupImage/photo01.jpg';
import Photo2 from '../images/puppyMockupImage/photo02.jpg';
import Photo3 from '../images/puppyMockupImage/photo03.jpg';
import Photo4 from '../images/puppyMockupImage/photo04.jpg';
import Photo5 from '../images/puppyMockupImage/photo05.jpg';
import Photo6 from '../images/puppyMockupImage/photo06.jpg';
import Photo7 from '../images/puppyMockupImage/photo07.jpg';
import Photo8 from '../images/puppyMockupImage/photo08.jpg';
import Photo9 from '../images/puppyMockupImage/photo09.jpg';
import Photo10 from '../images/puppyMockupImage/photo10.jpg';
import Photo11 from '../images/puppyMockupImage/photo11.jpg';
import Photo12 from '../images/puppyMockupImage/photo12.jpg';

class PuppyPhotoDisplay extends Component {
    render() {
        return (
            <>
                <body className="puppyBody">
                    <div className="container containerwidth">
                        <nav className="puppyNavbar navbar navbar-light bg-light col-xl-auto col-lg-12 col-md-12 col-sm-12 ">
                            <PuppyPhotoCardComponent
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
                                    <a className="nav-link puppyNavText" href="/pages/mockPuppyPages/MockPuppyPhoto">Photos</a>
                                </li>
                            </ul>
                        </nav>
                        <br />
                    </div>
                    <div className="container mainContainer">
                        <div className="row py-2 d-flex justify-content-center">
                            <div className="col-lg-12 d-flex justify-content-center title font2 ">
                                <h1 className="largeText">Photos</h1>
                            </div>
                            <br />
                            <div className="row py-2">
                                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center colImage px-5 ">
                                    <img id="image"
                                        src={Photo1} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo2} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo3} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo4} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo5} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo6} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo7} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo8} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo9}className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo10} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo11} className="img-rounded" alt="..." width="275" height="250" />
                                </div>
                                <div className="col-lg-3 col-md-6  col-sm-12 d-flex justify-content-center colImage">
                                    <img id="image"
                                        src={Photo12}className="img-rounded" alt="..." width="275" height="250" />
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
                        </div>
                    </div>
                </body>
            </>
        );
    }
}
export default PuppyPhotoDisplay;