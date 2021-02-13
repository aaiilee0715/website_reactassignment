import React, {useState, lgShow} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/top10Main.css';

import PlokPix from '../../images/top10FavImage/plokSS.png';
import JosephPix from '../../images/top10FavImage/Joseph.jpg';
function PlokModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Plok  <span
                                className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={PlokPix} className="fullWidth" />
                            Screenshot of Plok
                        <hr />
                            <img src={PlokPix}  className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=hx9vJT4HAcY"  type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                            One of the earliest games I can remember from my childhood is this game right here:
                                PLOK.<br />
                                <br />
                                From wiki: <strong>Plok</strong> <em>is a side-scrolling platform game developed by
                                    Software Creations and released for the Super Nintendo Entertainment System in 1993.
                                    It is a traditional platform game starring a red-hooded character named Plok.</em>
                                <br />
                                <br />
                                Back in the day, me and my siblings would play all day long trying to beat the levels
                                but because it would reset every time we tried to play, we would never get super far.
                                LOL.
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
export default PlokModalArea;