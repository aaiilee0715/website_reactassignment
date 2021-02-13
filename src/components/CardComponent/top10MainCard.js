import React, { Component } from 'react';
import '../style/top10Main.css';
import { Carousel, Dropdown } from 'react-bootstrap';
import Top10MainPageCardComponent from '../CardComponent/top10MainUI';
import GlassesPix from '../images/top10FavImage/Glasses.svg';
import JosephPix from '../images/top10FavImage/josephTrue.jpg';
import AnnPix from '../images/top10FavImage/annTrue.jpg';
import OnimushaCarouselPix from '../images/top10FavImage/omimushaCarousel.png';
import OverlordCarouselPix from '../images/top10FavImage/OverlordCarousel.png';
import ZeldaPix from '../images/top10FavImage/Zelda.jpg';
import MaidSamaPix from '../images/top10FavImage/MaidSama.jpg';
import NoblesseCarouselPix from '../images/top10FavImage/NoblesseCarousel.png';
import AttackCarouselPix from '../images/top10FavImage/AttackCarousel.png';
import CrashCarouselPix from '../images/top10FavImage/CrashCarousel.png';
import DonkeyCarouselPix from '../images/top10FavImage/DonkeyCarousel.png';
import PlokCarouselPix from '../images/top10FavImage/plokCarousel.png';
import HowlsCarouselPix from '../images/top10FavImage/HowlsCarousel.png';
import PokemonCarouselPix from '../images/top10FavImage/PokemonCarousel.png';
import YoshiCarouselPix from '../images/top10FavImage/YoshiCarousel.png';

class Top10MainDisplay extends Component {
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
                            <Dropdown.Item href="/pages/mockPuppyPages/JosephFavsPage">Joseph's Faves</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" target="_blank">More About Joseph</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <li class="nav-item">
                        <Top10MainPageCardComponent
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
                            <Dropdown.Item href="/pages/top10FavePages/aboutAnn" target="_blank">More About Ann</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </ul>
                {/* <!-- OUR PHOTOS AND TITLE HERE --> */}
                <div className="center">
                    <a href="/pages/mockPuppyPages/JosephFavsPage">
                        <img src={JosephPix} className="fullWidth imgFloatLeft shadow m-5"
                            alt="a photo of Joseph smiling, with glasses, with an illustrated art flair" />
                    </a>
                    <a href="/pages/mockPuppyPages/AnnFavsPage">
                        <img src={AnnPix} className="fullWidth imgFloatRight shadow m-5"
                            lt="a photo of Anothay smiling, with glasses, with an illustrated art flair" />
                    </a>
                </div>
                <div id="maxWidth" className="container-fluid">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 pastelGreen shadow">
                            <h1 id="mainLogo" className="josefin textCenter">JR&AC</h1>
                            <h1 id="tagline" className="parisienne textCenter">Our Favorites</h1>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row center">
                        <div className="col-2"></div>
                        <div className="col-8 pastelGreen shadow">
                            {/* <!-- CAROUSEL --> */}
                            <Carousel className="carousel-inner">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={OnimushaCarouselPix}
                                        alt="Screenshot of Omimusha: Warlords"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={AttackCarouselPix}
                                        alt="Screenshot of Attack On Titan"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={CrashCarouselPix}
                                        alt="Crash Bandicoot"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={DonkeyCarouselPix}
                                        alt="Screenshot of Donkey Kong Country"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={OverlordCarouselPix}
                                        alt="Overlord"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={PlokCarouselPix}
                                        alt="Screenshot of Plok on Super Nintendo"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={NoblesseCarouselPix}
                                        alt="Noblesse: Awakening"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HowlsCarouselPix}
                                        alt="Screenshot of Howl's Moving Castle"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={YoshiCarouselPix}
                                        alt="Yoshi Story"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={PokemonCarouselPix}
                                        alt="Screenshot of Pokemon"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    {/* <!-- 2COLUMNS FOR OUR TOP TWO --> */}
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-4 pastelBlue shadow colPad">
                            <h2 className="parisienne textCenter topTwoTitle">Top Two</h2>
                            <h6 className="josefin textCenter topTwoSubtitle">- BY JOSEPH -</h6>
                            <div className="row center topTwoV2 topTwoTitle vertical-center smallShadow">
                                <div className="col-3 cardCircleLeft">
                                    <span className="cardNum">1</span>
                                </div>
                                <div className="col-9">
                                    <h4 className="top10MainBodyh4">Pokemon<br />
                                        <span className="badge animePurple">#ANIME</span>
                                    </h4>
                                </div>
                            </div>
                            <hr className="top10MainBodyhr" />
                            <div className="row center topTwoV2 topTwoTitle vertical-center smallShadow">
                                <div className="col-3 cardCircleLeft">
                                    <span className="cardNum">2</span>
                                </div>
                                <div className="col-9">
                                    <h4 className="top10MainBodyh4">Plok<br />
                                        <span className="badge badge-primary">#VIDEOGAME</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 pastelOrange shadow colPad">
                            <h2 className="parisienne textCenter topTwoTitle">Top Two</h2>
                            <h6 className="josefin textCenter topTwoSubtitle">- BY ANN -</h6>
                            <div className="row center topTwoV2 topTwoTitle vertical-center smallShadow">
                                <div className="col-3 cardCircleLeft">
                                    <span className="cardNum">1</span>
                                </div>
                                <div className="col-9">
                                    <h4 className="top10MainPageh4">Inuyasha<br />
                                        <span className="badge animePurple">#ANIME</span>
                                    </h4>
                                </div>
                            </div>
                            <hr className="top10MainBodyhr" />
                            <div className="row center topTwoV2 topTwoTitle vertical-center smallShadow">
                                <div className="col-3 cardCircleLeft">
                                    <span className="cardNum">2</span>
                                </div>
                                <div className="col-9">
                                    <h4 className="top10MainPageh4">Omimusha: Warlords<br />
                                        <span className="badge badge-primary">#VIDEOGAME</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
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
export default Top10MainDisplay;