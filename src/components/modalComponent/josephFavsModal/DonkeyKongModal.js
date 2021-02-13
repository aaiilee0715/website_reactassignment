import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import DonkeyKongPix from '../../images/top10FavImage/DonkeyKongSS.jpg';
import DonkeyYTPix from '../../images/top10FavImage/DonkeyKongYT.png';
import JosephPix from '../../images/top10FavImage/Joseph.jpg';

function DonkeyModalArea() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    return (
        <>
            <span className="badge animePurple" onClick={() => setLgShow(true)}>SEE JOSEPH'S REVIEW</span>
            <Modal className="top10MainBodyh4"
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <img src={JosephPix} className="fullWidth imgFloat" />
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h2 className="modal-title" id="exampleModalLabel">Donkey Kong Country <span
                            className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={DonkeyKongPix} className="fullWidth" />
                            Screenshot of Donkey Kong Country
                        <hr />
                            <img src={DonkeyYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=OCAUcOzHBYw" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                Another game that I played during childhood. I remember, specifically,playing with my
                                mom as she tried to beat the levels in between working and single-mom-ing.<br />
                                <br />
                                From wiki: <strong>Donkey Kong Country </strong> <em>is a 1994 platform game developed
                                by Rare and published by Nintendo for the Super Nintendo Entertainment System
                                (SNES). It is a reboot of Nintendo's Donkey Kong franchise and follows the gorilla
                                Donkey Kong and his nephew Diddy Kong as they set out to recover their stolen banana
                                hoard from King K. Rool and the Kremlings. In 40 side-scrolling levels, the player
                                collects items, defeats enemies and bosses, and finds secrets on their journey to
                                defeat K. Rool. In the multiplayer modes, two players can work together
                                    cooperatively or race each other.</em>
                                <br />
                                <br />
                                    Highly recommend for anyone looking for a throwback. It's just an all-around fun game,
                                    family-friendly and guranteed to keep you busy for a few hours.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="transparent" onClick={handleClose}>
                        Close
                            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default DonkeyModalArea;