import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';

import '../../style/top10Main.css';
import InuyashaPix from '../../images/top10FavImage/Inuyashaanime.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';

function InuyashaModalArea() {
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
                        <h2 className="modal-title" id="examleModalLabel">Inuyasha <span
                            className="badge badge-pill badge-primary">#AnimeList</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={InuyashaPix} className="fullWidth" />
                            Inuyasha
                        <hr />
                            <img src="https://i.ytimg.com/vi/ocWMvU-2Yxw/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=ocWMvU-2Yxw" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4 className="top10MainBodyh4">Ann Review</h4>
                            <p>
                                A teenage girl periodically travels back in time to feudal Japan to help a young
                                half-demon recover the
                                shards of a jewel of great power.
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
export default InuyashaModalArea;