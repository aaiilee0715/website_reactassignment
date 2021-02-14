import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import PacManSSPix from '../../images/top10FavImage/pacmanss.jpg';
import PacManYTPix from '../../images/top10FavImage/PacmanYT.png';

function PacManModalArea() {
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
                            <img src={PacManSSPix} className="fullWidth" />
                            Screenshot of Kirby's Avalanche
                        <hr />
                            <img src={PacManYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=Y8t7-9PHCBI" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                Pac-Man World 2 is a video game by Namco USA for Xbox, Nintendo GameCube, 
                                PlayStation 2, Game Boy Advance, and Microsoft Windows released in 2002.  <br />  <br /> Like the original 
                                Pac-Man World, the player controls the character of Pac-Man in a 3D platforming environment.
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
export default PacManModalArea;
