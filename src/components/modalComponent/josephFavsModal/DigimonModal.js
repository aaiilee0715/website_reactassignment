import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import DigimonSSPix from '../../images/top10FavImage/DonkeyKongSS.jpg';
import DigimonYTPix from '../../images/top10FavImage/DigimonYT.png';

function DigimonModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Digimon <span
                            className="badge badge-pill badge-primary">#Anime</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={DigimonSSPix} className="fullWidth" />
                            Screenshot of Digimon
                        <hr />
                            <img src={DigimonYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=G27E2XPJHrA" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                I remember I used to make little digidevices out of rocks and play with them outside and pretend our coffee table would transport me to the digital world. I really enjoyed the way the digimon eveolved from the baby form to their digivolved selves. It's been so long but I remember I was in love with the show when it would play on Saturdays.<br />
                                <br />
                                From wiki: <strong>Digimon</strong> <em>, short for "Digital Monsters", is a Japanese media franchise encompassing virtual pet toys, anime, manga, video games, films and a trading card game. The franchise focuses on the eponymous creatures, who inhabit a "Digital World", a parallel universe that originated from Earth's various communication networks.</em>
                                <br />
                                <br />
                                I would highly recommend this one for anyone who likes Pokemon, but with more digitally inclined monsters.
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
export default DigimonModalArea;