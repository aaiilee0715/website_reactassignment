import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import DiabolikPix from '../../images/top10FavImage/Diabolik Lovers.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';
function DiabolikLoversModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Diabolik Lovers<span
                            className="badge badge-pill badge-primary">#AnimeList</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={DiabolikPix} className="fullWidth" />
                            Diabolik Lovers
                        <hr />
                            <img src="https://i.ytimg.com/vi/pRcNL2Tk3xY/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=wb07Pc2dpLk" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4 className="top10MainBodyh4">Ann Review</h4>
                            <p>
                                “The girl learns her fate amongst the beautiful scent of wild roses.
                                The girl encounters them, as if being drawn there by the threads of fate.<br/><br/>
                                ‘Yours Truly is going to take her every first experience.’ <br/>‘Tell me, do you hate me?
                                <br/>Do you want to learn more about me?’<br/> ‘Does it hurt?You poor thing... Okay, I'll make it
                                hurt even more, little *****.’<br/> ‘I know why you came to this house. <br/>This blood (of yours)
                                is of the finest quality.’<br/> ‘Humans are nothing more than containers of blood.’
                                <br/>‘Stay out of my business! <br/>Come any closer, and I'll destroy you!’
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
export default DiabolikLoversModalArea;