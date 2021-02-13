import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../../style/top10Main.css';
import YoshiPix from '../../images/top10FavImage/Yoshi.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';

function YoshiModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Yoshi Story(N64) <span
                        className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={YoshiPix} className="fullWidth" />
                            Crash Bandicoot
                        <hr />
                            <img src="https://i.ytimg.com/vi/MYBGTvKrIYo/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=MYBGTvKrIYo" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4 className="top10MainBodyh4">Ann Review</h4>
                            <p>
                                The player may choose between two different game modes from the game's main menu: Story
                                Mode and Trial Mode.
                                <br/><br/>Upon entering either mode, the player will be able to select a course, find out which
                                fruit will be the Lucky
                                Fruit, and choose a Yoshi of desired color to play as. <br/><br/>However, Trial Mode will be void
                                of courses to play at
                                the start of the game, as these will have to be unlocked by completing them in Story
                                Mode. On each course,
                                the goal is to fill the Fruit Frame by eating 30 pieces of fruit. These may be found in
                                abundance
                                throughout every course, lying around, floating in bubbles, and even carried by some
                                enemies.
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
export default YoshiModalArea;