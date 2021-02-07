import React from 'react';
import '../components/style/hamster.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HamsterCardDisplay from '../components/CardComponent/hamsterCardComponent';
import HamsterPackageDisplay from '../components/CardComponent/hamsterPackageCard';
import HamsterAmenitiesDisplay from '../components/CardComponent/hamsterAmenitiesCard';

import HamsterImages from '../components/images/hamsterImage/Logo.png';
import HamsterHome from '../components/images/hamsterImage/hamsterhomejpg.jpg';
import AwardFinest from '../components/images/hamsterImage/awardfinest.png';
import AwardGenuine from '../components/images/hamsterImage/awardgenuine.png';
import AwardSatisfaction from '../components/images/hamsterImage/awardsatisfaction.png';
import Hour from '../components/images/hamsterImage/24hour.png';
import Breakfast from '../components/images/hamsterImage/breakfast.png';
import Valet from '../components/images/hamsterImage/valet.png';
import Pool from '../components/images/hamsterImage/pool.png';
import HamsterReserve from '../components/images/hamsterImage/hamsterreserve.jpg';
import Logo from '../components/images/hamsterImage/Logo.png';

const HamsterHotelSite = () => {
  return (
    <div className="hamsterBody">
      <div className="hamsterBackToMain align-item-start">
        <a className="nav-link" href='/'>Back To Main</a>
      </div>
      {/* <!---Navigation Header--> */}
      <header>
        <div className="hamsterContainer-fluid" />
        <div className="row d-flex justify-content-center hamsterHeader">
          <div className="nav col-xl-auto col-lg-12 col-md-12 col-sm-12 ">
            <div className="nav-item d-flex align-items-end">
              <a className="nav-link active" href="#">Overview</a>
            </div>
            <div className="nav-item d-flex align-items-end">
              <a className="nav-link" href="#">Rooms</a>
            </div>
            <div className="nav-item d-flex align-items-end">
              <a className="nav-link" href="#">Packages</a>
            </div>
          </div>
          <div className="nav-item d-flex align-items-end">
            <a className="navBar-brand" href="#">
              <img src={HamsterImages} alt="Logo" width="143" height="100" />
            </a>
          </div>
          <div className="nav-item d-flex align-items-end ">
            <a className="nav-link" href="#">Amenities</a>
          </div>
          <div className="nav-item d-flex align-items-end">
            <a className="nav-link" href="#">Contact</a>
            <div>
              <div className="nav-item d-flex align-items-end">
                <button className="hamsterBtn btn-sm btn-outline-secondary mx-auto d-block" type="button">Reserve</button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </header>
      {/* <!--Image Of Palm Trees--> */}
      <section id="palmTrees" class="d-flex align-items-center justify-content-center">
        <div class="col-md-9 d-flex align-items-center justify-content-center">
          <div class="hamsterTextBlock">
            <h4 >Run on the wheel of luxury</h4>
            <p>Explore everything the beach has to offer in our relaxing resort.</p>
          </div>
        </div>
      </section>
      {/* <!--Hamster Wearing Hat--> */}
      <section id="hamsterHat" >
        <div className="container-fluid" >
          <div className="row d-flex justify-content-center ">
            <div className="d-flex justify-content-center">
              <img src={HamsterHome} alt="Hamster wearing hat" className="img-fluid" />
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
              <h1>Welcome to a hamster's paradise</h1>
              <p className="mt-5 ">Nestled in the heart of Cavia California, La Petite Maison is a luxury
              hotel designed for the small mammal with extravagance in mind. Escape to the warm comforts of stunning rooms, a relaxing spa,
              and a pool with a beach side view. Inspired by the warm beauty of the California Coast, we invite you to enjoy
                the rich accommodations along with our unmatched luxury. Discover the satisfaction of indulging in our quality rooms, and thank you for choosing La Petite Maison.</p>
              <div className="row d-flex justify-content-center m-5">
                <div className=" col-lg-12 col-md-12 col-sm-12 py-4 m-3">
                  <img src={AwardFinest} alt="Award Finest" className="img-fluid" />
                  <img src={AwardGenuine} alt="Genuine" className="img-fluid" />
                  <img src={AwardSatisfaction} alt="Satisfaction" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---Our Rooms--> */}
      <section id="ourRooms">
        <h1 className=" ourRoomsTitle d-flex justify-content-center">Our Rooms</h1>
        <HamsterCardDisplay />
      </section>
      {/* <!--Multi Hamster--> */}
      <section id="packagesCenter">
        <h1 className="packages d-flex justify-content-center m-5">Packages</h1>
        <HamsterPackageDisplay />
      </section>
      {/* <!--Amenities Section--> */}
      <div className="container-fluid amenitiesBG">
        <div className="row d-flex justify-content-center">
          <h1 className="amenitiesTitle text-center">Amenities</h1>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <p className=" amenitiesText text-center">Here at La Petite Maison, we invite you to enjoy our services in hopes
            that you have the most relaxing stay we can provide.</p>
          </div>  
        <HamsterAmenitiesDisplay />
     </div>
      </div>
      {/* <!--Reserved a Room--> */}
      <div className="container reservedRoom my-5 p-0">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="py-3">Reserve a Room</h1>
            <div class="row">
              <nav class="navbar navbar-expand-xl navbar-dark">
                <form className="col-xl-3 col-lg-5 col-sm-9">
                  <label for="CheckIn">Check In</label>
                  <input type="Check In Time" className="form-control"></input>
                </form>
                <form className="col-xl-3 col-lg-5 col-sm-9">
                  <label for="CheckOut">Check-Out</label>
                  <input type="Check Out Time" className="form-control"></input>
                </form>
                <form className="col-xl-3 col-lg-5 col-sm-9">
                  <label for="NumberGuests">Number of Guests</label>
                  <input type="Number of Guests" className="form-control"></input>
                </form>
                <form className="col-xl-3 col-lg-5 col-sm-9">
                  <label for="RoomType">Room Type</label>
                  <input type="Room Type" className="form-control"></input>
                </form>
                <div className="col-xl-2 col-lg-5 col-sm-9">
                  <button className="btn-sm btn-primary mt-5  mx-auto d-block">Check Availability</button>
                </div>
              </nav>
              <div className="col-12 mt-5 reservePix">
                <img src={HamsterReserve} width="100%" alt="hamster in food bowl" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER --> */}
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12 footer">
            <img src={Logo} alt="logo" />
            <h4 id="footerAddress" className="address">123 Sunflower Seed Rd., Cavia, California 95205</h4>
            <p className="address2">©LA PETITE MAISON HOTELS LIMITED 1939-2018. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HamsterHotelSite;