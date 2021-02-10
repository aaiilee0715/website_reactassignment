import React, { Component } from 'react';
import '../style/mockPuppy.css';
import PuppyCateringCardComponent from '../CardComponent/puppyCateringUI';
import MuzzleLogoPix from '../images/puppyMockupImage/MuzzlesLogo.png';
import CompanyLogoPix from '../images/puppyMockupImage/CompanyLogo.png';
import CateringHeroPix from '../images/puppyMockupImage/cateringHero.jpg';
import CateringMainPix from '../images/puppyMockupImage/cateringMaine.jpg';
import Catering1Pix from '../images/puppyMockupImage/catering1.jpg';
import Catering2Pix from '../images/puppyMockupImage/catering2.jpg';
import Catering3Pix from '../images/puppyMockupImage/catering3.jpg';

class PuppyCateringDisplay extends Component {
    render() {
        return (
            <>
                <body className="puppyBody">
                    <div className="container containerwidth">
                        <nav className="puppyNavbar navbar navbar-light bg-light col-xl-auto col-lg-12 col-md-12 col-sm-12 ">
                            <PuppyCateringCardComponent
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
                    {/* <!--Catering--> */}
                    <div className="container">
                        <div className="row py-2 d-flex justify-content-center noPad">
                            <div className="col-lg-12 d-flex justify-content-center title font2">
                                <h1>Catering</h1>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            <div className="row py-2">
                                <div className="col-xl-auto col-lg-12 col-md-12 col-sm-12">
                                    <img src={CateringHeroPix} className="img-fluid" alt="cateringHero height100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Catering--> */}
                    {/* <!--Our Catering Services--> */}
                    <div className="container my-4">
                        <div className="row px-3">
                            <div className="col-md-6 d-flex justify-content-end my-4">
                                <img src={CateringMainPix} alt="catering maine height100" className="img-fluid" />
                            </div>

                            <div className="col-md-6 cateringService my-4">
                                <h2 className="puppyTitle py-3">Our Catering Services</h2>
                                <p className="puppyCardText">Morbi tempus iaculis urna id. Aenean pharetra magna ac placerat. Mi proin sed
                                libero enim sed
                                faucibus turpis in. Et ultrices neque ornare aenean euismod. Quisque sagittis purus sit amet.
                                Ultricies tristique nulla aliquet enim tortor at auctor urna. Purus faucibus ornare suspendisse
                                sed.
                                Tempor nec feugiat nisl pretium fusce id velit ut tortor. Sed cras ornare arcu dui vivamus arcu
                                felis. Consectetur lorem donec massa sapien faucibus et molestie ac. Cum sociis natoque
                                penatibus et
                                magnis dis parturient. Ut faucibus pulvinar elementum integer enim. Vel risus commodo viverra
                        maecenas accumsan. Nec dui nunc mattis enim ut.<br /><br />
                        Posuere lorem ipsum dolor sit amet. Sed odio morbi
                        quis commodo odio aenean. Tortor posuere ac ut consequat semper viverra nam libero. Tellus
                        elementum
                        sagittis vitae et leo duis ut. Egestas quis ipsum suspendisse ultrices gravida. Tempor commodo
                        ullamcorper a lacus vestibulum sed arcu non odio. Auctor augue mauris augue neque gravida in
                        fermentum et sollicitudin. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.
                        Tristique senectus et netus et. Dolor sit amet consectetur adipiscing elit ut aliquam. Erat nam
                        at
                        lectus urna duis convallis convallis tellus. Egestas purus viverra accumsan in nisl nisi
                        scelerisque
                        eu ultrices.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--Bottom Image-->
        <!-- Card deck --> */}
                    <div className="container">
                        <div className="card-deck">
                            {/* <!-- Card --> */}
                            <div className="card mb-4 mt-5">
                                {/* <!--Card image--> */}
                                <div className="view overlay">
                                    <img className="card-img-top" src={Catering1Pix} alt="catering image 1" />
                                </div>
                            </div>
                            <div className="card mb-4 mt-5">
                                {/* <!--Card image--> */}
                                <div className="view overlay">
                                    <img className="card-img-top" src={Catering2Pix} alt="catering image 2" />
                                </div>
                            </div>
                            <div className="card mb-4 mt-5">
                                {/* <!--Card image--> */}
                                <div className="view overlay">
                                    <img className="card-img-top" src={Catering3Pix} alt="catering image 3 " />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--Bottom Image End--> */}
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
export default PuppyCateringDisplay;