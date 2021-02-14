import React, {useState, lgShow} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import FairySSPix from '../../images/top10FavImage/FairySS.jpg';
import FairyYTPix from '../../images/top10FavImage/FairyYT.png';

function FairyTaleModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Fairy Tale <span
                            className="badge badge-pill badge-primary">#Anime</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={FairySSPix} className="fullWidth" />
                            Screenshot of Fairy Tale
                        <hr />
                            <img src={FairyYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=nHUf6Jb0aSY" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                            I started watching this anime out of recommendation from my oldest nephew. I've really enjoyed it so far because the episodes are quick and they pack some humor. I watch the English dubs so I can still lsiten when I'm multi-tasking.<br/>
                                <br/>
                                From wiki: <strong>Fairy Tail </strong> <em>(stylized as FAIRY TAIL) is a Japanese manga series written and illustrated by Hiro Mashima. It was serialized in Kodansha's Weekly Shōnen Magazine from August 2006 to July 2017, with the individual chapters collected and published into 63 tankōbon volumes. The story follows the adventures of Natsu Dragneel, a member of the popular wizard[a] guild Fairy Tail, as he searches the fictional world of Earth-land for the dragon Igneel.</em>
                                <br/>
                                <br/>
                                I currently watch this anime during my lunch breaks and over dinner so when you need something quick, try this anime.
                                <br/>
                                <br/>
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
export default FairyTaleModalArea;