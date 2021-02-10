import React, { Component } from 'react';
import '../style/mockPuppy.css';

import PuppyAboutCardComponent from '../CardComponent/puppyAboutUI';
import MuzzleLogoPix from '../images/puppyMockupImage/MuzzlesLogo.png';
import AboutMePix from '../images/puppyMockupImage/AboutMain.jpg';
import CompanyLogoPix from '../images/puppyMockupImage/CompanyLogo.png';

class PuppyAboutDisplay extends Component {
    render() {
        return (
            <>
                <body class="puppyBody">
                    <div className="container containerwidth">
                        <nav className="puppyNavbar navbar navbar-light bg-light col-xl-auto col-lg-12 col-md-12 col-sm-12 ">
                            <PuppyAboutCardComponent
                                imgsrc={MuzzleLogoPix}
                                href="/pages/mockPuppy"
                            />
                            <ul className="nav justify-content-end">
                                <li className="nav-item puppyNavText">
                                    <a className="nav-link puppyNavText" href="../pages/about.html">About</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link puppyNavText" href="../pages/foodMenu.html">Menu</a>
                                </li>
                                <li className="nav-item puppyNavText">
                                    <a className="nav-link puppyNavText" href="../pages/catering.html">Catering</a>
                                </li>
                                <li className="nav-item puppyNavText">
                                    <a className="nav-link puppyNavText" href="../pages/photos.html">Photos</a>
                                </li>
                            </ul>
                        </nav>
                        <br />
                    </div>
                    <div>
                        {/* <!--The Story--> */}
                        <div class="container puppyBody">
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-end my-4">
                                    <img src={AboutMePix} alt="about me" class="img-fluid height100" />
                                </div>
                                <div class="col-md-6 story my-4">
                                    <h1 class="grillStory py-3 ">The Story Behind the Grill</h1>
                                    <p class="grillStoryText">Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Mattis
                                    molestie a iaculis at erat pellentesque adipiscing commodo. Quisque non tellus orci ac auctor augue.
                                    Tincidunt augue interdum velit euismod in pellentesque massa. Vel pharetra vel turpis nunc. Risus
                                    pretium quam vulputate dignissim suspendisse in est. Viverra nibh cras pulvinar mattis nunc sed
                                    blandit libero. Aenean pharetra magna ac placerat. Etiam sit amet nisl purus. Sollicitudin tempor id
                                    eu nisl nunc mi ipsum. Non tellus orci ac auctor augue. Suspendisse sed nisi lacus sed viverra
                                    tellus in hac. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Dignissim sodales ut
                                    eu sem integer vitae. Facilisis magna etiam tempor orci eu. Pharetra pharetra massa massa ultricies
                                    mi quis. Mattis rhoncus urna neque viverra justo nec. Egestas purus viverra accumsan in nisl nisi
                    scelerisque.<br /><br />Morbi tempus iaculis urna id. Aenean pharetra magna ac placerat. Mi proin sed
                    libero enim sed faucibus turpis in. Et ultrices neque ornare aenean euismod. Quisque sagittis purus
                    sit amet. Ultricies tristique nulla aliquet enim tortor at auctor urna. Purus faucibus ornare
                    suspendisse sed. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Sed cras ornare arcu dui
                    vivamus arcu felis. Consectetur lorem donec massa sapien faucibus et molestie ac. Cum sociis natoque
                    penatibus et magnis dis parturient. Ut faucibus pulvinar elementum integer enim. Vel risus commodo
                    viverra maecenas accumsan. Nec dui nunc mattis enim ut.<br /><br />Posuere lorem ipsum dolor sit amet.
                    Sed odio morbi quis commodo odio aenean. Tortor posuere ac ut consequat semper viverra nam libero.
                    Tellus elementum sagittis vitae et leo duis ut. Egestas quis ipsum suspendisse ultrices gravida.
                    Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Auctor augue mauris augue neque
                    gravida in fermentum et sollicitudin. Augue neque gravida in fermentum et sollicitudin ac orci
                    phasellus. Tristique senectus et netus et. Dolor sit amet consectetur adipiscing elit ut aliquam.
                    Erat nam at lectus urna duis convallis convallis tellus. Egestas purus viverra accumsan in nisl nisi
                    scelerisque eu ultrices.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!--Our Team--> */}
                        <div class="container d-flex justify-content-center ourTeam ">
                            <div class="row">
                                <div class="col-12">
                                    <h1 class="ourTeam">Our Team</h1>
                                </div>
                            </div>
                        </div>

                        <div class="container my-3 ">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-4">
                                    <div class="card my-3">
                                        <img src="../image/doxie3.jpg" class="card-img-top" alt="George" />
                                        <div class="card-body">
                                            <h5 class="card-title">George</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus. Feugiat scelerisque varius morbi enim. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Odio facilisis mauris sit amet massa vitae.</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-md-4">
                                    <div class="card my-3">
                                        <img src="../image/jackrussel.jpg" class="card-img-top" alt="Jack" />
                                        <div class="card-body">
                                            <h5 class="card-title">Butterscotch</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus. Feugiat scelerisque varius morbi enim. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Odio facilisis mauris sit amet massa vitae.</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-md-4">
                                    <div class="card my-3">
                                        <img src="../image/doxie1.jpg" class="card-img-top" alt="Louie" />
                                        <div class="card-body">
                                            <h5 class="card-title">Louie</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed
                                            sed risus. Feugiat scelerisque varius morbi enim. Scelerisque eu ultrices vitae auctor eu
                            augue ut lectus arcu. Odio facilisis mauris sit amet massa vitae.</p>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-md-4">
                                    <div class="card my-3">
                                        <img src="../image/novascotia.jpg" class="card-img-top" alt="Willow" />
                                        <div class="card-body">
                                            <h5 class="card-title">Willow</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed
                                            sed risus. Feugiat scelerisque varius morbi enim. Scelerisque eu ultrices vitae auctor eu
                            augue ut lectus arcu. Odio facilisis mauris sit amet massa vitae.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card my-3">
                                        <img src="../image/doxie2.jpg" class="card-img-top" alt="Skittles" />
                                        <div class="card-body">
                                            <h5 class="card-title">Skittles</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed
                                            sed risus. Feugiat scelerisque varius morbi enim. Scelerisque eu ultrices vitae auctor eu
                            augue ut lectus arcu. Odio facilisis mauris sit amet massa vitae.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card my-3">
                                        <img src="../image/staffie.jpg" class="card-img-top" alt="Mario" />
                                        <div class="card-body">
                                            <h5 class="card-title">Mario</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed
                                            sed risus. Feugiat scelerisque varius morbi enim. Scelerisque eu ultrices vitae auctor eu
                            augue ut lectus arcu. Odio facilisis mauris sit amet massa vitae.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer class="container">
                            <div class="puppyFooter">
                                {/* <!-- Grid row--> */}
                                <div class="row py-4 d-flex align-items-center">
                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0 footerPad">
                                        <h6 class="puppyFooterText">1357 Mutt Street, Rottweiler CA. 12345 <br /> Phone: 123-456-7890</h6>
                                    </div>
                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-6 col-lg-7 col-sm-12 text-center text-md-right logo-container footerPad">
                                        <img src={CompanyLogoPix} alt="companyLogo" class="img-fluid" height="32px" width="100px" />
                                        <p class="puppyFooterText">Copyright © Muzzles Restaurant</p>
                                    </div>
                                    {/* <!-- Grid column --> */}
                                </div>

                            </div>
                        </footer>




                    </div>
                </body>
            </>
        );
    }
}
export default PuppyAboutDisplay;