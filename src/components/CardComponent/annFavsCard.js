import React, { Component } from 'react';
import '../style/top10Main.css';
import { Dropdown, Carousel } from 'react-bootstrap';

import AnnFavsCardComponent from '../CardComponent/annFavsUI';
import GlassesPix from '../images/top10FavImage/Glasses.svg';
import AnnTruePix from '../images/top10FavImage/annTrue.jpg';
import OnimushaCarouselPix from '../images/top10FavImage/omimushaCarousel.png';
import CrashCarouselPix from '../images/top10FavImage/CrashCarousel.png';
import OverlordCarouselPix from '../images/top10FavImage/OverlordCarousel.png';
import NoblesseCarouselPix from '../images/top10FavImage/NoblesseCarousel.png';
import YoshiCarouselPix from '../images/top10FavImage/YoshiCarousel.png';
// <!---Modal Component---->
import OnimushaModal from '../modalComponent/annFavsModal/onimushaModal';
import ZeldaModal from '../modalComponent/annFavsModal/zeldaModal';
import CrashModal from '../modalComponent/annFavsModal/crashModal';
import RivalSchoolModalArea from '../modalComponent/annFavsModal/rivalSchoolModal';
import YoshiModalArea from '../modalComponent/annFavsModal/yoshiModal';
import InuyashaModalArea from '../modalComponent/annFavsModal/inuyashaModal';
import MaidSamaModalArea from '../modalComponent/annFavsModal/maidSamaModal';
import DiabolikLoversModalArea from '../modalComponent/annFavsModal/diabolikLoversModal';
import NoblessModalArea from '../modalComponent/annFavsModal/noblessModal';
import OverlordModalArea from '../modalComponent/annFavsModal/overlordModal';

class AnnFavsDisplay extends Component {
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
                        <AnnFavsCardComponent
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
                                src={OnimushaCarouselPix}
                                alt="Screenshot of Omimusha: Warlords"
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
                                src={OverlordCarouselPix}
                                alt="Overlord"
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
                                src={YoshiCarouselPix}
                                alt="Yoshi Story"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* <!-- 3 COLUMNS FOR OUR BIO & TOP 5S --> */}
                <div className="row">
                    <div className="col-xs-12 col-s-12 col-md-4 col-lg-4 pastelGreen profile">
                        <img src={AnnTruePix} className="fullWidth shadow clip-circle whiteBorder"
                            alt="a photo of Anothay smiling, with glasses, with an illustrated art flair" />
                        <hr />
                        <div className="center"><img src={GlassesPix} alt="Joseph and Ann's Glasses Logo" />
                        </div>
                        <hr />
                        <div>
                            <p className="blackText pCenter top10MainBodyp">
                                Humanistic, friendly, altruistic, sociable, and reformative.
                                The many symbols you will find about her Aquarius personality traits.
                                It was difficult for her to chose when requested about her top favorite lists of
                                video games, and anime lists.
                                She had many. This project is challenging, yet enjoyable for her.
                    </p>
                        </div>
                        <hr />
                        <div className="center">
                            <a href="/pages/top10FavePages/aboutAnn" target="_blank">
                                <button type="button" className="btn tabSalmon">See
                                More
                                About
                            Anothay</button>
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-s-12 col-md-4 col-lg-4 pastelGreen">
                        <div className="row center annTopTitles topTwoTitle vertical-center smallShadow">
                            <h3>Top 5 Video Games</h3>
                        </div>
                        <hr />

                        {/* <!-- Video Games Lists --> */}
                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal1">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>Onimusha: Warlords<br />
                                    <OnimushaModal
                                    />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal2">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>Zelda: Ocarina of Time<br />
                                    <ZeldaModal
                                    />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal3">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>Crash Bandicoot<br />
                                    <CrashModal
                                    />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal4">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>Rival Schools: United by Fate<br />
                                    <RivalSchoolModalArea
                                    />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal5">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>Yoshi Story<br />
                                    <YoshiModalArea
                                    />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        {/* <!----Anime Lists--> */}
                    </div>

                    <div className=" col-xs-12 col-s-6 col-md-4 pastelGreen">
                        <div className="row center annTopTitles vertical-center smallShadow">
                            <h3>Top 5 Anime</h3>
                        </div>
                        <hr />
                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal6">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>Inuyasha
                            <br />
                                  <InuyashaModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal7">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>
                                    Maid Sama
                            <br />
                                    <MaidSamaModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />
                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal8">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>
                                    Diabolik Lovers
                            <br />
                                    <DiabolikLoversModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />
                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal9">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>
                                    Noblesse: Awakening
                            <br />
                                    <NoblessModalArea />
                                </h4>
                            </div>
                        </div>
                        <hr />

                        <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                            data-target="#myModal10">
                            <div className="col-3 cardHeartLeft">
                                <span className="cardNum"></span>
                            </div>
                            <div className="col-9">
                                <h4>
                                    overlord
                            <br />
                                    <OverlordModalArea />
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
export default AnnFavsDisplay;