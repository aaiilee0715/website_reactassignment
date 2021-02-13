import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import AttactSSPix from '../../images/top10FavImage/AttackCarousel.png';
import AttactYTPix from '../../images/top10FavImage/AttackYT.png';

function AttackOnTitanModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Attack On Titan <span
                            className="badge badge-pill badge-primary">#Anime</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={AttactSSPix} className="fullWidth" />
                            Screenshot of Attack On Titan
                        <hr />
                            <img src={AttactYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=kd383XVbMXE" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                I got into this anime out a recommendation from an ex. LOL. I actually really enjoyed this one; it probably is one of the first animes I've ever finished as an adult. I think I may have watched this in college or a little after I graduated. It was really gore-y, which I was actually intrigued by.<br />
                                <br />
                                        From wiki: <strong>Attack on Titan </strong> <em>is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to retake the world after a Titan brings about the destruction of his home town and the death of his mother. </em>
                                <br />
                                <br />
                                                Maybe one day I'll revisit it, but only after I get through some of the ones on the long-ass spreadsheet.
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
export default AttackOnTitanModalArea;