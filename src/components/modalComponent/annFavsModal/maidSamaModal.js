import React, {useState, lgShow} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/top10Main.css';
import MaidSamaPix from '../../images/top10FavImage/MaidSama.jpg';
import AnnPix from '../../images/top10FavImage/Ann.jpg';

function MaidSamaModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Kaichou wa Maid Sama <span
                                className="badge badge-pill badge-primary">#AnimeList</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={MaidSamaPix} className="fullWidth" />
                            Maid Sama
                        <hr />
                            <img src="https://i.ytimg.com/vi/pRcNL2Tk3xY/maxresdefault.jpg" className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=pRcNL2Tk3xY" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4 className="top10MainBodyh4">Ann Review</h4>
                            <p>
                            Misaki attends a school that until recently was boys only. Despite efforts to increase
                                female recruitment,
                                the student body is still 80% male, all of whom seem to be goofballs. As student
                                president,
                                Misaki makes it her mission to entice more girls to join. However, little does anyone
                                know, this hard ass girl
                                with the reputation of a boy-hating dictator secretly works in a maid café! Then popular
                                boy Usui discovers her
                                secret and takes an interest in her.
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
export default MaidSamaModalArea;