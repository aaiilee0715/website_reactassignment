import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';
import NoblessPix from '../../images/top10FavImage/Noblesse_awakening_ova.png';
import AnnPix from '../../images/top10FavImage/Ann.jpg';

function NoblessModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Noblesse: Awakening <span
                            className="badge badge-pill badge-primary">#AnimeList</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={NoblessPix} className="fullWidth" />
                            Noblesse: Awakening
                        <hr />
                            <img src="https://i.ytimg.com/vi/icCAdBoqw2c/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=icCAdBoqw2c" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4 className="top10MainBodyh4">Ann Review</h4>
                            <p>
                                Cadis Etrama di Raizel wakes up from 820-years long sleep and starts a new life as a
                                high school student.
                                <br/><br/>His peaceful days as a student are soon interrupted as his new human friends are
                                assaulted by mysterious
                                attackers with superhuman abilities.
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
export default NoblessModalArea;