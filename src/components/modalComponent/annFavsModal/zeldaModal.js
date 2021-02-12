import React, { useState, setShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';
import ZeldaPix from '../../images/top10FavImage/The_Legend_of_Zelda_Ocarina_of_Time_Gameplay4-10.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';

function ZeldaModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Zelda: Ocarina of Time(N64)
                        <span
                                className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={ZeldaPix} className="fullWidth" />
                            Zelda: Ocarina of Time
                        <hr />
                            <img src="https://i.ytimg.com/vi/4eKiAAfPzfY/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=4eKiAAfPzfY" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Ann Review</h4>
                            <p>
                                The player controls Link in the fantasy land of Hyrule on a quest to stop the evil
                                king
                                Ganondorf,
                                by traveling through time and navigating dungeons and an overworld.
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
export default ZeldaModalArea;