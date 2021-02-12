import React, { Component, Modal, Button } from 'react';
import '../style/top10Main.css';

import AnnFavsCardComponent from '../CardComponent/annFavsUI';
import GlassesPix from '../images/top10FavImage/Glasses.png';
import InuPix from '../images/top10FavImage/Inu.jpg';
import AnnPix from '../images/top10FavImage/Ann.jpg';
class AnnFavsDisplay extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="row brightGreen navPad">
                        <div class="col-4">
                            <a class="josefin" href="#">Ann's Faves</a>
                        </div>
                        <div className="col-4 center ">
                            <AnnFavsCardComponent
                                imgsrc={GlassesPix}
                                link="/pages/mockPuppyPages/Top10MainPage"
                            />
                        </div>
                        <div className="col-4 rightAlign">
                            <a className="josefin" href="/pages/mockPuppyPages/AnnFavsPage">A.C.</a>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <img src={InuPix} alt="Inuyasha" width="100%" />
                        </div>
                    </div>

                    {/* <!-- 2COLUMNS FOR OUR TOP TWO --> */}
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col pastelGreen profile">
                            <img src={AnnPix} className="fullWidth shadow clip-circle whiteBorder"
                                alt="a photo of Joseph smiling, with glasses, with an illustrated art flair" />
                            <hr />
                            <div className="center">
                                <img src={GlassesPix} alt="Joseph and Ann's Glasses Logo" />
                            </div>
                            <hr />
                            <div>
                                <p className="blackText pCenter">
                                    Humanistic, friendly, altruistic, sociable, and reformative.
                                    The many symbols you will find about her Aquarius personality traits.
                                    It was difficult for her to chose when requested about her top favorite lists of
                                    video games, and anime lists.
                                She had many. This project is challenging, yet enjoyable for her.</p>
                            </div>
                            <hr />
                            <div className="center">
                                <a href="./moreAboutAnn.html" target="_blank">
                                    <button type="button" className="btn animePurple">See More
                                    About
                            Anothay</button>
                                </a>
                            </div>
                        </div>
                        <div className="col pastelGreen">
                            <div className="row center TopTitles topTwoTitle vertical-center smallShadow">
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
                                    </h4>
                                </div>
                            </div>
                            <hr />
                            {/* <!----Anime Lists--> */}
                        </div>
                        <div className="col pastelGreen">
                            <div className="row center TopTitles vertical-center smallShadow">
                                <h3>Top 5 Anime</h3>
                            </div>
                            <hr />
                            <div type="button" className="row center top5 topTwoTitle vertical-center smallShadow" data-toggle="modal"
                                data-target="#myModal6">
                                <div className="col-3 cardHeartLeft">
                                    <span className="cardNum"></span>
                                </div>
                                <div className="col-9">
                                    <h4>
                                        Inuyasha
                            <br />
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        <span className="badge animePurple">WATCH REVIEW</span>
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
                                        overworld
                        <br />
                                        <span className="badge animePurple">WATCH REVIEW</span>
                                    </h4>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
                {/* <!-- Modal 1 --> */}
                <div className="modal fade" id="myModal1" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                    aria-hidden="true">
                    <img src="./image/Ann.jpg" className="fullWidth imgFloat" />
                    <div className="modal-dialog modal-lg">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">Onimusha: Warlords (ps2)<span
                                    className="badge badge-pill badge-primary">#VideoGame</span>
                                </h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-5 vl">
                                        <img src="./image/onimusha-warlords-screenshot-02-ps4-us-15jan2018.jpg" className="fullWidth" />
                            Onimusha: Warlords
                        </div>
                                    <div className="col-7">
                                        <h4>Ann Review</h4>
                                        <p>
                                            Onimusha: Warlords, known in Japan as Onimusha (Japanese: 鬼武者), is an action-adventure
                                            video game
                                            and the first entry of the Onimusha series, released for the PlayStation 2 in 2001. An
                                            updated form as
                                            Genma Onimusha (Japanese: 幻魔 鬼武者) for the Xbox was released in 2002. The original
                                            Warlords version
                                            was ported to Microsoft Windows, although it was only available in China and Russia. A
                                            remaster for
                                            Nintendo Switch, PlayStation 4, Xbox One and Windows via Steam was released on January
                                            15, 2019.
                            </p>
                                    </div>
                                    <div className="col-5 vl">
                                        <img src="//yt3.ggpht.com/en6B4enidO2T3QpMvZvPVhb1kwIsnRre2hPmfWTyxTUOUWKzCU0lHKPPGzTxZ_mV-G7sAYMFRQ=w72-h100-nd"
                                            className="fullWidth" />
                                        <div>
                                            <a href="https://www.youtube.com/watch?v=rqzWc5cIjqM&t=26s" type="button"
                                                className="btn btn-primary red" target="_blank">Watch Trailer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- FOOTER --> */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>













                <nav>
                    <div id="copyright" className="row pastelPurple">
                        <div className="col-12">
                            <p className="textCenter top10MainP">COPYRIGHT © 2020 | JOSEPH RACCA & ANOTHAY CHANSY</p>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
export default AnnFavsDisplay;