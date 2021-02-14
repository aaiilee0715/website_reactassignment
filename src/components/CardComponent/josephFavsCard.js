import React, { Component } from 'react';
import '../style/top10Main.css';
import { Dropdown, Carousel } from 'react-bootstrap';
import JosephFavsCardComponent from '../CardComponent/josephFavsUI';
// Import Pictures
import GlassesPix from '../images/top10FavImage/Glasses.svg';
import JosephPix from '../images/top10FavImage/squareJoseph.jpg';
import AttackPix from '../images/top10FavImage/AttackCarousel.png';
import DonkeyPix from '../images/top10FavImage/DonkeyCarousel.png';
import PlokPix from '../images/top10FavImage/plokCarousel.png';
import HowlsPix from '../images/top10FavImage/HowlsCarousel.png';
import PokemonPix from '../images/top10FavImage/PokemonCarousel.png';
// Modal Component
import PlokModal from '../modalComponent/josephFavsModal/PlokModal';
import DonkeyKongModal from '../modalComponent/josephFavsModal/DonkeyKongModal';
import SuperMarioModalArea from '../modalComponent/josephFavsModal/SuperMarioModal';
import KirbyModalArea from '../modalComponent/josephFavsModal/KirbyModal';
import PacManModalArea from '../modalComponent/josephFavsModal/PacManModal';
import FairyTaleModalArea from '../modalComponent/josephFavsModal/FairyTaleModal';
import AttackOnTitanModalArea from '../modalComponent/josephFavsModal/AttackOnTitanModal';
import PokemonModalArea from '../modalComponent/josephFavsModal/PokemonModal';
import DigimonModalArea from '../modalComponent/josephFavsModal/DigimonModal';
import HowlsModalArea from '../modalComponent/josephFavsModal/HowlsMovingCastleModal';

class JosephFavsDisplay extends Component {
    render() {
        return (
            <>
                {/* <!-- NAV BAR HERE --> */}
                <ul className="nav nav-tabs center d-flex justify-content-center">
                    <Dropdown className="nav-link">
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                            J.RACCA
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/pages/top10FavePages/josephFavs">Joseph's Faves</Dropdown.Item>
                            <Dropdown.Item href="/pages/top10FavePages/aboutJoseph" target="_blank">More About Joseph</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <li class="nav-item">
                        <JosephFavsCardComponent
                            imgsrc={GlassesPix}
                            link="/pages/mockPuppyPages/Top10MainPage"
                        />
                    </li>
                    <Dropdown className="nav-link">
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                            A.CHANSY
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/pages/mockPuppyPages/AnnFavsPage">Ann's Faves</Dropdown.Item>
                            <Dropdown.Item href="/pages/mockPuppyPages/AboutAnnPage" target="_blank">More About Ann</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
                {/* <!-- CAROUSEL --> */}
                <div id="maxWidth" className="container">
                    <Carousel className="carousel-inner">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={AttackPix}
                                alt="Screenshot of Attack On Titan"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={DonkeyPix}
                                alt="Screenshot of Donkey Kong Country"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={PlokPix}
                                alt="Screenshot of Plok on Super Nintendo"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={HowlsPix}
                                alt="Screenshot of Howl's Moving Castle"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={PokemonPix}
                                alt="Screenshot of Pokemon"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* <!-- 3 COLUMNS FOR OUR BIO & TOP 5S --> */}
                <div className="row">
                    <div className="col-xs-12 col-s-12 col-md-4 col-lg-4 pastelGreen profile">
                        <img src={JosephPix} className="fullWidth shadow clip-circle whiteBorder"
                            alt="a photo of Joseph smiling, with glasses, with an illustrated art flair" />
                        <hr />
                        <div className="center"><img src={GlassesPix} alt="Joseph and Ann's Glasses Logo" />
                        </div>
                        <hr />
                        <div>
                            <p className="blackText pCenter top10MainBodyp">
                                Joseph had fun doing this assignment. Most of these picks come from his childhood and really
                        sparked some nostalgia. <br /><br />He is currently a <strong>student</strong> at Codestack
                        Academy in Stockton, California.
                        Prior
                        to enrolling in the Academy, he
                        worked as a <strong>graphic designer</strong>, which he hopes will come in handy as he learns
                        development.
                    </p>
                        </div>
                        <hr />
                        <div className="center">
                            <a href="/pages/top10FavePages/aboutJoseph" target="_blank">
                                <button type=" button" className="btn animePurple">See More About
                            Joseph </button>
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-s-12 col-md-4 col-lg-4 pastelGreen">
                        <div className="row center josephTopTitles topTwoTitle vertical-center smallShadow">
                            <h3>Top 5 Video Games</h3>
                        </div>
                        <hr />
                        {/* <!-- TESTER MODAL BUTTON --> */}
                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal1">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Plok (SNES)<br />
                                    <PlokModal />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal2">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Donkey Kong (SNES)<br />
                                    <DonkeyKongModal />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal3">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Super Mario Bros (SNES)<br />
                                    <SuperMarioModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal4">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Kirby's Avalanche (SNES)<br />
                                    <KirbyModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal5">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>PacMan World 2 (PS2)<br />
                                    <PacManModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />
                        {/* <!-- TOP ANIME HERE --> */}
                    </div>

                    <div class="col-xs-12 col-s-6 col-md-4 pastelGreen">
                        <div class="row center josephTopTitles vertical-center smallShadow">
                            <h3>Top 5 Anime</h3>
                        </div>
                        <hr />
                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal6">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Fairy Tale<br />
                                    <FairyTaleModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal7">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Attack On Titan<br />
                                    <AttackOnTitanModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />
                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal8">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Pokemon<br />
                                    <PokemonModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />
                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal9">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Digimon<br />
                                    <DigimonModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />
                        <div type="button" class="row center top52 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#modal10">
                            <div class="col-3 cardHeartLeft2">
                                <span class="cardNum"></span>
                            </div>
                            <div class="col-9">
                                <h4>Howl's Moving Castle<br />
                                    <HowlsModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <nav>
                    <div id="copyright" className="row pastelPurple">
                        <div className="col-12">
                            <p className="textCenter top10MainBodyp">COPYRIGHT © 2020 | JOSEPH RACCA & ANOTHAY CHANSY</p>
                        </div>
                    </div>
                </nav>
            </>

        );
    }
}
export default JosephFavsDisplay;