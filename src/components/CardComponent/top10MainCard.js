import React, { Component } from 'react';
import '../style/top10Main.css';
import { Carousel } from 'react-bootstrap';
import Top10MainPageCardComponent from '../CardComponent/top10MainUI';
import GlassesPix from '../images/top10FavImage/Glasses.png';
import JosephPix from '../images/top10FavImage/Joseph.jpg';
import AnnPix from '../images/top10FavImage/Ann.jpg';
import OnimushaPix from '../images/top10FavImage/onimusha-warlords-screenshot-02-ps4-us-15jan2018.jpg';
import OverlordPix from '../images/top10FavImage/overlord.jpg';
import ZeldaPix from '../images/top10FavImage/Zelda.jpg';
import MaidSamaPix from '../images/top10FavImage/MaidSama.jpg';
import NoblessePix from '../images/top10FavImage/Noblesse_awakening_ova.png';

class Top10MainDisplay extends Component {
    render() {
        return (
            <>
               
                    <nav>
                        <div className="row brightGreen navPad">
                            <div className="col-4">
                                <a className="josefin" href="./josephFaves.html">J.R.</a>
                            </div>
                            <div className="col-4 center ">
                                <Top10MainPageCardComponent
                                    imgsrc={GlassesPix}
                                    link="/pages/mockPuppyPages/Top10MainPage"
                                />
                            </div>
                            <div className="col-4 rightAlign">
                                <a className="josefin" href="./index.html">A.C.</a>
                            </div>
                        </div>
                    </nav>

                    {/* <!-- OUR PHOTOS AND TITLE HERE --> */}
                    <div className="center">
                        <a href="./josephFaves.html">
                            <img src={JosephPix} className="fullWidth imgFloatLeft shadow m-5"
                                alt="a photo of Joseph smiling, with glasses, with an illustrated art flair" />
                        </a>
                        <a href="./index.html">
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
                                            src={OnimushaPix}
                                            alt="Onimusha"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={OverlordPix}
                                            alt="Overlord"
                                       />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={ZeldaPix}
                                            alt="Zelda"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={MaidSamaPix}
                                            alt="Maid Sama"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={NoblessePix}
                                            alt="Nobless"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                 </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                   







               
            </>

        );
    }
}
export default Top10MainDisplay;