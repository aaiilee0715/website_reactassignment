import React from 'react';
import { Carousel, Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../components/style/business.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalComponent from '../components/modalComponent/businessModal';
import BusinessMenuDisplay from '../components/CardComponent/businessMenuCard';
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
        <div className="row d-flex justify-content-center ">
          <div className="d-flex justify-content-center"></div>
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
      {/* <!------------Menue Area---------------------> */}
      <section id="menuArea">
        <div className="container-fluid">
          <div className="row d-flex align-items-center flex-column">
            <h2>Our Delicious</h2>
            <h2>Menu</h2>
          </div>
          <BusinessMenuDisplay />
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
            <Carousel id="carouselContent" className="text-center p-4">
              <Carousel.Item interval={5000}>
                <p>"Ordered from door dash. I was so impressed with the food quality and
                  flavor.<br /> Delicious!
                  Definitely will order again."</p>
                <h3>- Salina M</h3>
              </Carousel.Item>
              <Carousel.Item interval={5000} >
                <p>"Coffee is better then most. Staff is friendly. I got the minty mocha
                  and my wife loves the lavender latte."</p>
                <h3>- Michael</h3>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <p>"Coffee is better then most. Staff is friendly. I got the minty mocha
                  and my wife loves the lavender latte."</p>
                <h3>- Eric B.</h3>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        {/* <!-- Learn more area with text and pictures --> */}
        <div className="row pt-4 bgWhite">
          <div className="container d-flex align-items-center flex-column">
            <a className="goldColor1"
              href="https://www.google.com/search?hl=en-US&gl=us&q=Poppy+Coffee,+4343+Pacific+Ave+ste+a-1,+Stockton,+CA+95207&ludocid=17533180313257344712&lsig=AB86z5Wx42cLeryfc8BkJnIBiVBn#lrd=0x80900da569583a47:0xf3525e99a2937ec8,1"
              target="_blank"><button type="button" className="btn btn-outline goldColor1">LEARN MORE</button></a>
            <h2 className="brownColor">ABOUT US</h2>
            <img id="coffeeBean" src={CoffeBean} className="card-img-top" alt="coffee bean picture" />
            <Container className="py-2 d-flex flex-column align-items-center">
              <p className="learnText text-center">Enjoy a cup of coffee, tea, or lemonade at Poppy Coffee!<br />
            This local coffee shop is serving up Old
             Soul Co. coffee from Sacramento and a wide menu of breakfast items, including waffles! </p>
              <Row>
                <Col lg={4} md={4}>
                  <Image src={HeartCoffee} className="img-thumbnail aboutImgs" alt="heart latte" />
                </Col>
                <Col lg={4} md={4}>
                  <Image src={Waffles} className="img-thumbnail aboutImgs" alt="waffles" />
                </Col>
                <Col lg={4} md={4}>
                  <Image src={Tea} className="img-thumbnail aboutImgs" alt="tea" />
                </Col>
              </Row>
            </Container>
          </div>
          {/* <!-- Join the Experience area and pictures --> */}
          <div className="row pt-4">
            <div className="container d-flex align-items-center flex-column">
              <h3 className="goldColor">JOIN THE</h3>
              <h2 className="brownColor">EXPERIENCE</h2>
              <div className="card">
                <img id="coffeeBean" src={CoffeBean} className="card-img-top" alt="coffee bean picture" />
              </div>
            </div>
            <div className="container pt-5">
              <div className="row d-flex justify-content-between pb-2">
                <div className="col-lg-4 col-md-12 putCenter pb-2">
                  <ModalComponent src={CoffeeGlass} />
                </div>
                <div className="col-lg-4 col-md-12 pb-2 putCenter">
                  <ModalComponent src={Brew} />
                </div>
                <div className="col-lg-4 col-md-12 putCenter">
                  <ModalComponent src={Relax} />
                </div>
              </div>
              <div class="container pb-3">
                <div class="row putCenter">
                  <div className="col-lg-4 col-md-12 pb-2 d-flex justify-content-end putCenter">
                    <ModalComponent src={TeaAndCoffee} />
                  </div>
                  <div className="col-lg-4 col-md-12 pb-2 d-flex justify-content-end putCenter">
                    <ModalComponent src={Coffee} />
                  </div>
                  <div className="col-lg-4 col-md-12 pb-2 d-flex justify-content-start putCenter">
                    <ModalComponent src={Avocado} />
                  </div>
                </div>
              </div>
              <div className="container pb-3">
                <div className="row">
                  <div className="col-lg-6 col-md-12 pb-2 d-flex justify-content-end expBot">
                    <ModalComponent src={Lunch} />
                  </div>
                  <div className="col-lg-6 col-md-12 pb-2 d-flex justify-content-start expBot">
                    <ModalComponent src={Morning} />
                  </div>
                </div>
              </div>
              <div class="container pb-3">
                <div class="row putCenter">
                  <div class="col-lg-12 col-md-12 pb-2 d-flex justify-content-center expBot">
                    <ModalComponent src={Shop} />
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
                  <Card style={{ width: '18rem' }}>
                    <Card.Body className="card.body" >
                      <Card.Title className="card-title">LOCATIONS</Card.Title>
                      <Card.Subtitle className="mb-2 card-text">4343 Pacific Ave
                      Ste. A-1 STOCKTON, CA 95207</Card.Subtitle>
                      <a href="https://www.google.com/maps/dir//Poppy+Coffee/data=!4m8!4m7!1m0!1m5!1m1!1s0x80900da569583a47:0xf3525e99a2937ec8!2m2!1d-121.31121279999999!2d37.986981"
                        target="_blank" className="btn-sm direction mx-auto d-block">GET DIRECTION</a>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body >
                      <Card.Title className="card-title">CALL US</Card.Title>
                      <Card.Subtitle className="mb-2 card-text">(209) 565-5737</Card.Subtitle>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '19rem' }}>
                    <Card.Body >
                      <Card.Title>BUSINESS HOURS</Card.Title>
                      <Card.Subtitle className="mb-2 card-text">Mon: 6:00 AM – 7:00 PM <br />Tue: 6:00 AM – 7:00 PM <br />Wed: 6:00 AM
                      – 7:00 PM<br /> Thu: 6:00 AM – 9:00 PM <br />Fri: 6:00 AM – 7:00 PM <br />Sat: 6:00 AM – 7:00 PM <br />Sun: 6:00 AM – 7:00 PM</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex-justify-content-center">
            <div className="row d-flex justify-content-center">
              <a className="bottomYelpImg pl-2" href="https://www.yelp.com/biz/poppy-coffee-stockton" target="_blank"><i
                className="fab fa-yelp fa-2x"></i></a>
              <a className="bottomFBImg" href="https://www.facebook.com/poppycoffee209/" target="_blank"><i
                className="fab fa-facebook-f fa-2x px-2"></i></a>
              <a className="bottomIGImg" href="https://www.instagram.com/poppycoffee_209/?hl=en" target="_blank"><i
                className="fab fa-instagram fa-2x"></i></a>
            </div>
          </div >
        </div>
      </div>
      {/* <!---------Footer----------> */}
      < footer className="page-footer" >
        <div className="footer-copyright text-center py-3 copyRight">©2020 Copyright | Anothay Chansy & Juan Morales
        </div>
      </footer >
    </div>
  );
}
export default BusinessRedo;