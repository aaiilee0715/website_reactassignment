import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import HowlsSSPix from '../../images/top10FavImage/HowlsSS.jpg';
import HowlsYTPix from '../../images/top10FavImage/HowlsYT.png';

function HowlsModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Howl's Moving Castle <span
                            className="badge badge-pill badge-primary">#Anime</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={HowlsSSPix} className="fullWidth" />
                            Screenshot of Howl's Moving Castle
                        <hr />
                            <img src={HowlsYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=ZL41fu_Y44Q" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                I personally love all of Studio Gibli's movies. When I watch them, I really feel like I'm escaping reality, transported to an ethereal place. I think I might need to watch one of these, maybe even Howl's Moving Castle.<br />
                                <br />
                            From wiki: <strong>Howl's Moving Castle</strong> <em>,is a 2004 Japanese animated fantasy film written and directed by Hayao Miyazaki. The film is loosely based on the 1986 novel of the same name by British author Diana Wynne Jones. The film was produced by Toshio Suzuki, animated by Studio Ghibli and distributed by Toho. The Japanese voice cast featured Chieko Baisho and Takuya Kimura, while the English dub version starred Jean Simmons, Emily Mortimer, Lauren Bacall, Christian Bale, Josh Hutcherson and Billy Crystal. </em>
                                <br />
                                <br />
                            If you want an escape, definitely go for this one or any of Studio Ghibli's works.
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
export default HowlsModalArea;