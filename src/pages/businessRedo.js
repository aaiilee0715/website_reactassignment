import React from 'react';
import { Carousel } from 'react-bootstrap';

import '../components/style/business.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import CoffeBean from '../components/images/businessImage/coffee.png';
import HeartCoffee from '../components/images/businessImage/o.jpg';
import Waffles from '../components/images/businessImage/waffles.jpg';
import Tea from '../components/images/businessImage/tea.jpg';
import CoffeeGlass from '../components/images/businessImage/COFFEE GLASS.jpg';
import Brew from '../components/images/businessImage/BREW.jpg';
import Relax from '../components/images/businessImage/RELAX.jpg';
import TeaAndCoffee from '../components/images/businessImage/TEAANDCOFFEE.jpg';
import Coffee from '../components/images/businessImage/COFFEE.jpg';
import Avocado from '../components/images/businessImage/AVOCADO.jpg';
import Lunch from '../components/images/businessImage/LUNCH.jpg';
import Morning from '../components/images/businessImage/MORNING.jpg';
import Shop from '../components/images/businessImage/SHOP.jpg';

const BusinessRedo = () => {
  return (
    <div className="businessBody">
      {/* <!------------Main Navigation-------------> */}

      <header>

        <div className="BusinessBackToMain align-item-start">
          <a className="nav-link" href='/'>Back To Main</a>
        </div>
        <nav className="topRow" >
          <div id="rowForTop d-flex justify-content-between" className="row">
            <div id="phoneID" className="col-lg-2 col-sm-2 d-flex justify-content-end pt-3">
              <i className="fas fa-phone-alt phoneIcon px-3"></i>
              <p className="phoneText">(209) 565-5737</p>
            </div>
            <div id="mapID" className="col-lg-3 col-sm-4  d-flex justify-content-start pt-3">
              <i className="fas fa-map-marker-alt locationIcon px-2"></i>
              <p className="mapText">Pacific Avenue, Stockton, CA 95207</p>
            </div>
            <div id="toptextID" className="col-lg-4 col-sm-3  d-flex justify-content-center pt-3">
              <p className="topText">Coffee & Tea, Breakfast & Brunch, Sandwiches</p>
            </div>

            <div id="icon3ID" class="col-lg-3 col-sm-3 d-flex justify-content-center pt-3">
              <a id="yelpPad" class="yelpImg pr-3" href="https://www.yelp.com/biz/poppy-coffee-stockton"
                target="_blank"><i class="fab fa-yelp"></i></a>
              <a class="fbImg pr-3" href="https://www.facebook.com/poppycoffee209/" target="_blank"><i
                class="fab fa-facebook-f"></i></a>
              <a class="igImg" href="https://www.instagram.com/poppycoffee_209/?hl=en" target="_blank"><i
                class="fab fa-instagram"></i></a>
            </div>

          </div>
        </nav>
      </header >
      {/* <!------Hero Image----------> */}
      <div id="heroContPad" className="container-fluid">
        <div className="view d-flex flex-column">
          <nav className="navbar navbar-expand-lg middleNav">
            <h1 className="storeLogoText">Poppy Coffee</h1>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
              data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="navbar-text pr-3" href="#">HOME</a>
                <a className="navbar-text pr-3" href="#menuArea">MENU</a>
                <a className="navbar-text pr-3" href="https://orders.cake.net/11157251" target="_blank">PLACE
                ORDER</a>
                <a className="navbar-text" href="#botCont">CONTACT US</a>
              </div>
            </div>
          </nav>

          <div className="col-md-12 mb-4 white-text text-center wow fadeIn">
            <i className="far fa-heart display-3 white-text mb-0 pt-md-5 my-5 heartLogo"></i>
            <h1 className="subtext-header mt-2 mb-4">Everything is beautiful with coffee!</h1>
            <button type="button" id="placeOrderBtn" href="https://orders.cake.net/11157251" target="_blank"
              className="hvr-right text-center">PLACE ORDER</button>
          </div>
        </div>
      </div>

      {/* <!-- COVID AREA --> */}
      <div id="outercovidArea d-flex align-items-center">
        <div className="row">
          <div className="col-lg-2 d-flex justify-content-center"></div>
          <div id="covidArea8" className="col-8">
            <div id="underArea8" className="col-12">
              <div id="innercovidArea">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="updateText">COVID-19 UPDATES</h2>
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
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
      {/* <!------------Menue Area---------------------> */}
      <section id="menuArea">
        <div className="container-fluid">
          <div className="row d-flex align-items-center flex-column">
            <h2>Our Delicious</h2>
            <h2>Menu</h2>
          </div>
          <div className="container-fluid pt-5" >
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 d-flex justify-content-center">
                <div id="leftSide" className="card">
                  <div className="card-body">
                    {/* <!------------ Title Area------------ --> */}
                    <div className="container">
                      <div className="row d-flex justify-content-center pb-4">
                        <h2>COFFEE</h2>
                      </div>
                      <div className="row d-flex justify-content-between">
                        <h3>French Press Coffee</h3>
                        <h3>$ 5.00</h3>
                      </div>
                    </div>
                    {/* <!-- Container that contains more text --> */}
                    <div className="container">
                      <div className="row d-flex justify-content-between">
                        <h3>Box of Coffee</h3>
                        <h3>$ 17.00</h3>
                      </div>
                      <div className="row">
                        <p>Get 12-8oz. cups of coffee included with cream and sugar packets.</p>
                      </div>
                    </div>
                    {/* <!--New Items Tab --> */}
                    <div className="container">
                      <div className="row d-flex justify-content-center pb-4">
                        <h2 className="d-flex justify-content-center py-5">-DRIP COFFEE-</h2>
                      </div>
                      <div className="row d-flex justify-content-between">
                        <h3>8oz. Coffee</h3>
                        <h3>$ 2.00</h3>
                      </div>
                      <div className="row d-flex justify-content-between">
                        <h3>Small Drip Coffee</h3>
                        <h3>$ 2.50</h3>
                      </div>
                      <div className="row d-flex justify-content-between">
                        <h3>Medium Drip Coffee</h3>
                        <h3>$ 3.00</h3>
                      </div>
                      <div className="row d-flex justify-content-between">
                        <h3>Large Drip Coffee</h3>
                        <h3>$ 3.50</h3>
                      </div>
                    </div>
                    {/* <!--New Items Tab --> */}
                    <div className="container">
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
                    </div>
                    {/* <!--New Items Tab --> */}
                    <div className="container">
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
                    </div>
                    {/* <!--New Items Tab --> */}
                    <div className="container pb-5">
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
              </div>
              {/* <!-- Split for the 2 sides --> */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div id="rightSide" className="card">
                  <div className="card-body">
                    <div className="container">
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
                    </div>
                    <div className="container">
                      <div className="row d-flex justify-content-between">
                        <h3>Garden Bagel</h3>
                        <h3>$ 5.50</h3>
                      </div>
                      <div className="row">
                        <div id="garlicSandwich" className="col-6">
                          <p>Garlic pesto cream cheese, tomato, arugula, topped with everything seasoning.</p>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row d-flex justify-content-between">
                        <h3>Custom B-Fast Sandwich</h3>
                        <h3>$6.00</h3>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row d-flex justify-content-between">
                        <h3>Berkeley Bagel</h3>
                        <h3>$ 6.50</h3>
                      </div>
                      <div className="row">
                        <div className="col-6 addzeroPad">
                          <p>Choice of bagel, Avocado hummus topped with chopped cucumber, onion, sprouts,
                          and house made chill seasoning.</p>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row d-flex justify-content-between">
                        <h3>Dream Sandwich</h3>
                        <h3>$ 6.65</h3>
                      </div>
                      <div className="row">
                        <div className="col-6 addzeroPad">
                          <p>Croissant with pesto cream cheese, sausage, provolone cheese, poached egg,
                          and topped with arugula.</p>
                        </div>
                      </div>
                    </div>
                    <div className="container">
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
                    </div>
                    <div id="menuContPad" className="container d-flex justify-content-center align-items-center">
                      <button id="fullMenuOrderBtn" href="https://orders.cake.net/11157251"
                        target="_blank" className="hvr-right">FULL MENU</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- --------The divider----------> */}
      <div id="secCont" className="container-fluid">
        <div className="row pt-4 bgWhite">
          <div className="container d-flex align-items-center flex-column">
            <h3 className="goldColor">WHAT OUR CLIENTS SAY</h3>
            <h2 className="brownColor">TESTIMONIALS</h2>
            <div className="coffeeBeanPart">
              <img id="coffeeBean" src={CoffeBean} className="card-img-top" alt="coffee bean picture" />
            </div>
          </div>
        </div>
        <div className="row pt-4 bgWhite">
          <div className="container">
            <div id="carouselContent" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" aria-label="comments">
                <div className="carousel-item active text-center p-4 pt-5">
                  <p className="comPlaced">"Ordered from door dash. I was so impressed with the food quality and
                  flavor. Delicious!
                  Definitely will order again."</p>
                  <p className="userCom"><b>- Salina M</b></p>
                </div>
                <div className="carousel-item text-center p-4 pt-5">
                  <p className="comPlaced">"Coffee is better then most. Staff is friendly. I got the minty mocha
                  and my wife loves the lavender latte."</p>
                  <p className="userCom"><b>- Eric B.</b></p>
                </div>
                <div className="carousel-item text-center p-4 pt-5">
                  <p className="comPlaced">Great coffee here, supporting a local place, cool vibe, aren't mask
                  nazis and still
                  respect choice, the OG bagel sandwich is fire! Come get a cup!</p>
                  <p className="userCom"><b>- Michael</b></p>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselContent" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselContent" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Learn more area with text and pictures --> */}
      <div className="row pt-4 bgWhite">
        <div className="container d-flex align-items-center flex-column">
          <a className="goldColor1"
            href="https://www.google.com/search?hl=en-US&gl=us&q=Poppy+Coffee,+4343+Pacific+Ave+ste+a-1,+Stockton,+CA+95207&ludocid=17533180313257344712&lsig=AB86z5Wx42cLeryfc8BkJnIBiVBn#lrd=0x80900da569583a47:0xf3525e99a2937ec8,1"
            target="_blank"><button type="button" className="btn btn-outline goldColor1">LEARN MORE</button></a>
          <h2 className="brownColor">ABOUT US</h2>
          <div className="card">
            <img id="coffeeBean" src={CoffeBean} className="card-img-top" alt="coffee bean picture" />
          </div>
          <div className="container py-2 d-flex flex-column align-items-center">
            <div className="row ">
              <div className="col-12">
                <p className="learnText">Enjoy a cup of coffee, tea, or lemonade at Poppy Coffee!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="learnText"> This local coffee shop is serving up Old
                        Soul Co. coffee from Sacramento and a wide </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="learnText">menu of breakfast items, including waffles!</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-4 col-md-6 pb-2 moreCentered">
                <img src={HeartCoffee} className="img-thumbnail aboutImgs" alt="thumbnail picture 1" />
              </div>
              <div className="col-lg-4 col-md-6 pb-2 moreCentered">
                <img src={Waffles} className="img-thumbnail aboutImgs" alt="thumbnail picture 2" />
              </div>
              <div className="col-lg-4 col-md-12 putCenter">
                <img src={Tea} className="img-thumbnail aboutImgs" alt="thumbnail picture 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Join the Experience area and pictures --> */}
      <div className="row pt-4 bgWhite">
        <div className="container d-flex align-items-center flex-column">
          <h3 className="goldColor">JOIN THE</h3>
          <h2 className="brownColor">EXPERIENCE</h2>
          <div className="card">
            <img id="coffeeBean" src={CoffeBean} className="card-img-top" alt="coffee bean picture" />
          </div>

          <div className="container pt-5">
            <div className="row d-flex justify-content-between pb-2">

              <div className="col-lg-4 col-md-12 putCenter pb-2">
                <button type="button" className="businessBtn putCenter" data-toggle="modal" data-target="#exampleModal"
                  aria-label="modal pic">
                  <img src={CoffeeGlass} className="img-thumbnail expTop" alt="glass of coffee" />
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body d-flex justify-content-center">
                        <img src={CoffeeGlass} className="img-thumbnail modalImg"
                          alt="glass of coffee" />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="businessBtn btn-secondary" data-dismiss="modal"
                          aria-label="modal closer">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 pb-2 putCenter">
                <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal1">
                  <img src={Brew} className="img-thumbnail expTop" alt="brew coffee" />
                </button>
                <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body d-flex justify-content-center">
                        <img src={Brew} className="img-thumbnail modalImg"
                          alt="brew coffee" />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="businessBtn btn-secondary"
                          data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 putCenter">
                <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal2">
                  <img src={Relax} className="img-thumbnail expTop" alt="relaxing picture" />
                </button>
                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body d-flex justify-content-center">
                        <img src={Relax} className="img-thumbnail modalImg"
                          alt="relaxing picture" />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="businessBtn btn-secondary"
                          data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container pb-3">
              <div className="row putCenter">
                <div className="col-lg-4 col-md-12 pb-2 d-flex justify-content-end putCenter">
                  <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal3"
                    aria-label="tea and coffe">
                    <img src={TeaAndCoffee} className="img-thumbnail expMid"
                      alt="tea and coffee" />
                  </button>
                  <div className="modal fade" id="exampleModal3" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center">
                          <img src={TeaAndCoffee} className="img-thumbnail modalImg"
                            alt="tea and coffee" />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="businessBtn btn-secondary" data-dismiss="modal"
                            aria-label="tea closer">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 pb-2 d-flex justify-content-center">
                  <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal4"
                    aria-label="coffee modal">
                    <img src={Coffee} className="img-thumbnail expMid" alt="coffee picture" />
                  </button>
                  <div className="modal fade" id="exampleModal4" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center">
                          <img src={Coffee} className="img-thumbnail modalImg"
                            alt="coffee and food picture" />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="businessBtn btn-secondary" data-dismiss="modal"
                            aria-label="coffee closer">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-lg-4 col-md-12 pb-2 d-flex justify-content-start putCenter">
                  <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal5"
                    aria-label="Avocado modal">
                    <img src={Avocado} className="img-thumbnail expMid" alt="Avocado picture" />
                  </button>
                  <div className="modal fade" id="exampleModal5" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center">
                          <img src={Avocado} className="img-thumbnail modalImg"
                            alt="Avocado sandwich" />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="businessBtn btn-secondary" data-dismiss="modal"
                            aria-label="Avocado closer">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container pb-3">
              <div className="row">
                <div className="col-lg-6 col-md-12 pb-2 d-flex justify-content-end putCenter">
                  <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal6"
                    aria-label="lunch modal">
                    <img src={Lunch} className="img-thumbnail exp2Bot" alt="salmon sandwich" />
                  </button>
                  <div className="modal fade" id="exampleModal6" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center">
                          <img src={Lunch} className="img-thumbnail modalSide"
                            alt="salman sandwich" />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="businessBtn btn-secondary" data-dismiss="modal"
                            aria-label="lunch closer">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-lg-6 col-md-12 pb-2 d-flex justify-content-start putCenter">
                  <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal7"
                    aria-label="morning modal">
                    <img src={Morning} className="img-thumbnail exp2Bot" alt="coffee shop" />
                  </button>
                  <div className="modal fade" id="exampleModal7" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center">
                          <img src={Morning} className="img-thumbnail modalSide"
                            alt="coffee shop" />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="businessBtn btn-secondary" data-dismiss="modal"
                            aria-label="morning closer">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid pb-3">
              <div className="row putCenter">
                <div className="col-lg-12 col-md-6 d-flex justify-content-center">
                  <button type="button" className="businessBtn" data-toggle="modal" data-target="#exampleModal8"
                    aria-label="shop modal">
                    <img src={Shop} className="img-thumbnail exp1Bot" alt="poppy logo" />
                  </button>
                  <div className="modal fade" id="exampleModal8" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center">
                          <img src={Shop} className="img-thumbnail modalSide"
                            alt="poppy logo" />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="businessBtn btn-secondary" data-dismiss="modal"
                            aria-label="shop closer">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-----Botttom Information-----> */}
      <div id="botCont" className="container-fluid">
        <div className="row bgWhite">
          <div id="botRow" className="container py-5">
            <div className="row d-flex justify-content-center">

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body d-flex flex-column">
                    <p className="card-title">LOCATIONS</p>
                    <p className="card-text">4343 Pacific Ave
                      Ste. A-1 STOCKTON, CA 95207</p>
                    <a href="https://www.google.com/maps/dir//Poppy+Coffee/data=!4m8!4m7!1m0!1m5!1m1!1s0x80900da569583a47:0xf3525e99a2937ec8!2m2!1d-121.31121279999999!2d37.986981"
                      target="_blank" className="btn-sm direction mx-auto d-block">GET DIRECTION</a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">CALL US</p>
                    <p className="card-text">(209) 565-5737</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">BUSINESS HOURS</p>
                    <p className="card-businessText">Mon: 6:00 AM – 7:00 PM Tue: 6:00 AM – 7:00 PM Wed: 6:00 AM
                    – 7:00 PM Thu: 6:00 AM –
                    9:00
                  PM Fri: 6:00 AM – 7:00 PM Sat: 6:00 AM – 7:00 PM Sun: 6:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="row bgWhite d-flex justify-content-center">
          <a className="bottomYelpImg pl-2" href="https://www.yelp.com/biz/poppy-coffee-stockton" target="_blank"><i
            className="fab fa-yelp fa-2x"></i></a>
          <a className="bottomFBImg" href="https://www.facebook.com/poppycoffee209/" target="_blank"><i
            className="fab fa-facebook-f fa-2x px-2"></i></a>
          <a className="bottomIGImg" href="https://www.instagram.com/poppycoffee_209/?hl=en" target="_blank"><i
            className="fab fa-instagram fa-2x"></i></a>
        </div>
      </div >
      {/* <!---------Footer----------> */}
      <footer className="page-footer">
        <div className="footer-copyright text-center py-3 copyRight">©2020 Copyright | Anothay Chansy & Juan Morales
        </div>
      </footer>
    </div>
  );
}
export default BusinessRedo;