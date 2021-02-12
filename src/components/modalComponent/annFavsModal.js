import React, { useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

import '../style/top10Main.css';
import OnimushaPix from '../images/top10FavImage/onimusha-warlords-screenshot-02-ps4-us-15jan2018.jpg';
function AnnModalArea(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span className="badge animePurple" onClick={handleShow}>
                SEE ANN'S REVIEW
      </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                {/* <Image src={props.src} onClick={handleShow} class="fullWidth imgFloat">
                </Image> */}
                <Modal.Header closeButton>
                    <h2 className="modal-title" id="exampleModalLabel">Onimusha: Warlords (ps2)
                <span className="badge badge-pill badge-primary">#VideoGame</span></h2>
                </Modal.Header>
                <Modal.Body>
                    <div class="row">
                        <div class="col-5 vl">
                            <img src="//yt3.ggpht.com/en6B4enidO2T3QpMvZvPVhb1kwIsnRre2hPmfWTyxTUOUWKzCU0lHKPPGzTxZ_mV-G7sAYMFRQ=w72-h100-nd" class="fullWidth" />
                            XOnimusha: Warlords
                        <hr /></div>
                        <div class="col-7">
                            <h4>Ann Review</h4>
                            <p>
                                Onimusha: Warlords, known in Japan as Onimusha (Japanese: 鬼武者), is an action-adventure
                                video game
                                and the first entry of the Onimusha series, released for the PlayStation 2 in 2001. An
                                updated form as
                                Genma Onimusha (Japanese: 幻魔 鬼武者) for the Xbox was released in 2002. The original
                                Warlords version
                                was ported to Microsoft Windows, although it was only available in China and Russia. A
                                remaster for
                                Nintendo Switch, PlayStation 4, Xbox One and Windows via Steam was released on January
                                15, 2019.
                            </p>
                        </div>
                        <div class="col-5 vl">
                            <img src={OnimushaPix} class="fullWidth" />

                            <div>
                                <a href="https://www.youtube.com/watch?v=rqzWc5cIjqM&t=26s" type="button"
                                    class="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
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
export default AnnModalArea;