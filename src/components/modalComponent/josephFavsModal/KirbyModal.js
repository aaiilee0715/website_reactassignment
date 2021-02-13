import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import KirbySSPix from '../../images/top10FavImage/KirbySS.jpg';
import KirbyYTPix from '../../images/top10FavImage/KirbyYT.png';

function KirbyModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Kirby's Avalanche <span
                            className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={KirbySSPix} className="fullWidth" />
                            Screenshot of Kirby's Avalanche
                        <hr />
                            <img src={KirbyYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=mgQUAbiIUuo" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                This was probably the game that came with the SNES itself because we always played it
                                but it wasn''t always the most fun but still it's a classic in my mind. More of like a
                                tetris-style game, you have to clear the little jello characters that fall from the
                                top.<br />
                                <br />
                                From wiki: <strong>Kirby's Avalanche </strong> <em>is a puzzle video game co-developed
                                by HAL Laboratory, Compile and Banpresto. It was released by Nintendo on February 1,
                                1995, in Europe and on April 25, 1995, in North America for the Super Nintendo
                                Entertainment System. It is a Western release of the Japanese Super Puyo Puyo. There
                                was not a Japanese release, and the game remains the only Kirby title not released
                                    there.</em>
                                <br />
                                <br />
                                For when you need a break from the more "fun" games. LMFAO.
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
export default KirbyModalArea;