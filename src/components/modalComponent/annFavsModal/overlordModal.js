import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';
import OverlordPix from '../../images/top10FavImage/overlord.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';

function OverlordModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Overlord <span
                            className="badge badge-pill badge-primary">#AnimeList</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={OverlordPix} className="fullWidth" />
                            Overlord
                        <hr />
                            <img src="https://i.ytimg.com/vi/ffTKNwHF70c/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=ffTKNwHF70c" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4 className="top10MainBodyh4">Ann Review</h4>
                            <p>
                                Overlord is one of those anime titles that we have seen a million times over in the past
                                few years.
                                <br/><br/>The whole “Player is stuck in an online game” story has been done to death thanks to
                                .Hack// and Sword Art
                                Online; but what makes Overlord stand out is that it’s done from a different perspective
                                that I’ve always
                                wanted to see: <br/><br/>What happens if a villain is stuck in the game? Overlord answers this
                                question and goes deeper
                                into the realms of personal morality taking a back seat to keeping up appearances… Plus
                                a cast of amusing demons keeps you wanting more.
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
export default OverlordModalArea;