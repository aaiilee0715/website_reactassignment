import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import MarioPix from '../../images/top10FavImage/SuperMarSS.png';
import MarioYTPix from '../../images/top10FavImage/SuperMarYT.png';

function SuperMarioModalArea() {
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
                        <h2 className="modal-title" id="exampleModalLabel">Super Mario World <span
                            className="badge badge-pill badge-primary">#VideoGame</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={MarioPix} className="fullWidth" />
                            Screenshot of Super Mario World
                        <hr />
                            <img src={MarioYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=mgQUAbiIUuo" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                So there's a trend here. All my fave games are games that I remember from when I was
                                younger. I'm a gamer by no means, so I'm really digging deep for these fave games. But
                                this was a classic. I don't think we had our own so we always borrowed from our freinds
                                and cousins. So it was a real treat getting to play this.<br />
                                <br />
                                From wiki: <strong>Super Mario World </strong> <em>is a 1990 platform game developed by
                                Nintendo for the Super Nintendo Entertainment System (SNES). The story follows
                                Mario's quest to save Princess Toadstool and Dinosaur Land from the series
                                antagonist Bowser and his minions, the Koopalings. The gameplay is similar to that
                                of earlier Super Mario games: Players control Mario or his brother Luigi through a
                                series of levels in which the goal is to reach the flagpole at the end. Super Mario
                                World introduced Yoshi, a dinosaur who can eat enemies, as well as gain abilities by
                                    eating the shells of Koopa Troopas.</em>
                                <br />
                                <br />
                                It's-a me, Mario-seph. Now go find this game and have some fun and let it remind you of
                                when times were simpler.
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
export default SuperMarioModalArea;