import React from 'react';
import '../components/style/business.css';

import CoffeBean from '../components/images/businessImage/coffee.png';
import HeartCoffee from '../components/images/businessImage/o.jpg';
import Waffles from '../components/images/businessImage/waffles.jpg';
import Tea from '../components/images/businessImage/tea.jpg';

const BusinessRedo = () => {
  return (
    <>
      {/* <!------------Main Navigation-------------> */}
      <header>
        <div className="backToMain align-item-start">
          <a className="nav-link" href='/'>Back To Main</a>
        </div>
        <nav className="topRow" >
          <div id="rowForTop d-flex justify-content-between" className="row">
            <div id="phoneID" className="col-lg-2 col-sm-2 d-flex justify-content-end pt-3">
              <i className="fas fa-phone-alt phoneIcon px-3"></i>
              <p className="phoneText">(209) 565-5737</p>
            </div>
            <div id="mapID" className="col-lg-3 col-sm-3  d-flex justify-content-start pt-3">
              <i className="fas fa-map-marker-alt locationIcon px-2"></i>
              <p className="mapText">Pacific Avenue, Stockton, CA 95207</p>
            </div>
            <div id="toptextID" className="col-lg-4 col-sm-4  d-flex justify-content-center pt-3">
              <p className="topText">Coffee & Tea, Breakfast & Brunch, Sandwiches</p>
            </div>
            <div id="icon3ID" className="col-lg-3 col-sm-3 d-flex justify-content-center pt-3">
              <a id="yelpPad" className="yelpImg pr-3" href="https://www.yelp.com/biz/poppy-coffee-stockton"
                target="_blank"><i className="fab fa-yelp"></i></a>
              <a className="fbImg pr-3" href="https://www.facebook.com/poppycoffee209/" target="_blank"
                className="fab fa-facebook-f"></a>
              <a className="igImg" href="https://www.instagram.com/poppycoffee_209/?hl=en" target="_blank"
                className="fab fa-instagram"></a>
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
            <button className="btn placeOrderBtn" href="https://orders.cake.net/11157251" target="_blank"
              className="hvr-right">PLACE ORDER</button>
          </div>
        </div>
      </div>

      {/* <!-- COVID AREA --> */}
      <div id="outercovidArea d-flex align-items-center">
        <div className="row">
          <div className="col-2"></div>
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
                <div className="row">
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
                      <button className="btn fullMenuOrderBtn" href="https://orders.cake.net/11157251"
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
      <div id="secCont" class="container-fluid">
        <div class="row pt-4 bgWhite">
          <div class="container d-flex align-items-center flex-column">
            <h3 class="goldColor">WHAT OUR CLIENTS SAY</h3>
            <h2 class="brownColor">TESTIMONIALS</h2>
            <div class="card">
              <img id="coffeeBean" src={CoffeBean} class="card-img-top" alt="coffee bean picture" />
            </div>
          </div>
        </div>
        <div class="row pt-4 bgWhite">
          <div class="container">
            <div id="carouselContent" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" aria-label="comments">
                <div class="carousel-item active text-center p-4 pt-5">
                  <p class="comPlaced">"Ordered from door dash. I was so impressed with the food quality and
                  flavor. Delicious!
                  Definitely will order again."</p>
                  <p class="userCom"><b>- Salina M</b></p>
                </div>
                <div class="carousel-item text-center p-4 pt-5">
                  <p class="comPlaced">"Coffee is better then most. Staff is friendly. I got the minty mocha
                  and my wife loves the lavender latte."</p>
                  <p class="userCom"><b>- Eric B.</b></p>
                </div>
                <div class="carousel-item text-center p-4 pt-5">
                  <p class="comPlaced">Great coffee here, supporting a local place, cool vibe, aren't mask
                  nazis and still
                  respect choice, the OG bagel sandwich is fire! Come get a cup!</p>
                  <p class="userCom"><b>- Michael</b></p>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Learn more area with text and pictures --> */}
      <div class="row pt-4 bgWhite">
        <div class="container d-flex align-items-center flex-column">
          <a class="goldColor1"
            href="https://www.google.com/search?hl=en-US&gl=us&q=Poppy+Coffee,+4343+Pacific+Ave+ste+a-1,+Stockton,+CA+95207&ludocid=17533180313257344712&lsig=AB86z5Wx42cLeryfc8BkJnIBiVBn#lrd=0x80900da569583a47:0xf3525e99a2937ec8,1"
            target="_blank"><button type="button" class="btn btn-outline goldColor1">LEARN MORE</button></a>
          <h2 class="brownColor">ABOUT US</h2>
          <div class="card">
            <img id="coffeeBean" src={CoffeBean} class="card-img-top" alt="coffee bean picture" />
          </div>
          <div class="container py-2 d-flex flex-column align-items-center">
            <div class="row ">
              <div class="col-12">
                <p class="learnText">Enjoy a cup of coffee, tea, or lemonade at Poppy Coffee!</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="learnText"> This local coffee shop is serving up Old
                        Soul Co. coffee from Sacramento and a wide </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="learnText">menu of breakfast items, including waffles!</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row d-flex justify-content-between">
              <div class="col-lg-4 col-md-6 pb-2 moreCentered">
                <img src={HeartCoffee}class="img-thumbnail aboutImgs" alt="thumbnail picture 1" />
              </div>
              <div class="col-lg-4 col-md-6 pb-2 moreCentered">
                <img src={Waffles} class="img-thumbnail aboutImgs" alt="thumbnail picture 2" />
                </div>
                <div class="col-lg-4 col-md-12 putCenter">
                  <img src={Tea} class="img-thumbnail aboutImgs" alt="thumbnail picture 3" />
                </div>
              </div>
            </div>
          </div>
    </div>
    
     




    </>
  );
}
export default BusinessRedo;