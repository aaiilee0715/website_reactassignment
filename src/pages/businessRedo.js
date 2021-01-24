import React from 'react';
import '../components/style/business.css';



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
        <div class="row">
          <div class="col-2"></div>
          <div id="covidArea8" class="col-8">
            <div id="underArea8" class="col-12">
              <div id="innercovidArea">
                <div class="row">
                  <div class="col-lg-6">
                    <h2 class="updateText">COVID-19 UPDATES</h2>
                  </div>
                  <div class="col-lg-6">
                    <p id="openText">Open today until 7:00 PM</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <h3 id="upService">Updated Services</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-2 d-flex justify-content-center align-items-center">
                    <i class="fas fa-check addIconPad"></i>
                    <h5>Outdoor seating</h5>
                  </div>
                  <div class="col-lg-2 d-flex justify-content-center align-items-center">
                    <i class="fas fa-check addIconPad"></i>
                    <h5>Delivery</h5>
                  </div>
                  <div class="col-lg-2 d-flex justify-content-center align-items-center">
                    <i class="fas fa-check addIconPad"></i>
                    <h5>Phone Order</h5>
                  </div>
                  <div class="col-lg-2 d-flex justify-content-center align-items-center">
                    <i class="fas fa-check addIconPad"></i>
                    <h5>Take-Out</h5>
                  </div>
                  <div class="col-lg-2 d-flex justify-content-center align-items-center">
                    <i class="fas fa-check addIconPad"></i>
                    <h5>Sit-down dining</h5>
                  </div>
                  <div class="col-lg-2 d-flex justify-content-center align-items-center">
                    <i class="fas fa-check addIconPad"></i>
                    <h5>Curbside pickup</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>











    </>
  );
}
export default BusinessRedo;