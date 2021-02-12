import React, { useState, lgShow } from 'react'
import {Modal, Button} from 'react-bootstrap';
import '../../style/top10Main.css';

import CrashPix from '../../images/top10FavImage/Crash.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';
function CrashModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Crash Bandicoot(Ps1)
                        <span
                                className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={CrashPix} className="fullWidth" />
                            Crash Bandicoot
                        <hr />
                            <img src="https://i.ytimg.com/vi/tNpcNUH_hX4/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=tNpcNUH_hX4" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Ann Review</h4>
                            <p>
                                Crash Bandicoot: It's About Time is a modernized digest of good humor, invigorating
                                colors and old-fashioned gameplay
                                the way we like it combined with four new ways to play with Quantum masks. I enjoyed my
                                time with Crash 4
                                and would easily recommend it to any like-minded fans of the series.
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
export default CrashModalArea;