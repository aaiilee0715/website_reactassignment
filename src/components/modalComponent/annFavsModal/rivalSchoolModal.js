import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../../style/top10Main.css';
import RivalSchoolPix from '../../images/top10FavImage/rival school.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';

function RivalSchoolModalArea() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    return (
        <>
            <span className="badge animePurple" onClick={() => setLgShow(true)}>SEE ANN'S REVIEW</span>
            <Modal className="top10MainBodyh4"
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <img src={AnnPix} className="fullWidth imgFloat" />
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h2 className="modal-title" id="exampleModalLabel">Rival Schools: United by Fate (Playstation)
                        <span
                                className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={RivalSchoolPix} className="fullWidth" />
                            Crash Bandicoot
                        <hr />
                            <img src="https://i.ytimg.com/vi/2wqrM0_e0QY/hqdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=2wqrM0_e0QY" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Ann Review</h4>
                            <p>
                                A player chooses a team of two characters, and fights against another two character
                                team.
                                The actual fights, however, are one-on-one fights, with the partner only participating
                                by
                                being called in when a player has enough 'vigor' for a Team Up attack, done by pressing
                                a punch and kick
                                button of the same pressure. <br/><br/>The Team Ups are some kind of double team attack by the
                                character and partner,
                                or (for most female characters' Team Ups) heal the main character or give them more
                                vigor.
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
export default RivalSchoolModalArea;