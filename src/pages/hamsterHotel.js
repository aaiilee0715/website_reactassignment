import React from 'react';

import '../components/style/hamster.css';
import HamsterImages from '../components/images/hamsterImage/Logo.png';

const HamsterHotelSite = () => {
  return (
    <>
      {/* <!---Header--> */}
      <header>
        <div class="container-fluid" />
        <div class="row d-flex justify-content-center header">
          <div class="nav  d-flex justify-content-center">

            <div class="nav-item d-flex align-items-end">
              <a class="nav-link active" href="#">Overview</a>
            </div>

            <div class="nav-item d-flex align-items-end">
              <a class="nav-link" href="#">Rooms</a>
            </div>

            <div class="nav-item d-flex align-items-end">
              <a class="nav-link" href="#">Packages</a>
            </div>
          </div>

          <div class=" d-flex justify-content-center">
            <div class="nav-item d-flex align-items-end">
              <a class="navBar-brand" href="#">
                <img src={HamsterImages} alt="Logo" width="143" height="100" />
              </a>
            </div>
          </div>

          <div class=" d-flex justify-content-center">
            <div class="nav-item d-flex align-items-end">
              <a class="nav-link" href="#">Amenities</a>
            </div>
            <div class="nav-item d-flex align-items-end">
              <a class="nav-link" href="#">Contact</a>
              <div>
                <div class="nav-item d-flex align-items-end">
                  <a><button class="btn btn-sm btn-outline-secondary" type="button">Reserve</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>




  );

}
export default HamsterHotelSite;