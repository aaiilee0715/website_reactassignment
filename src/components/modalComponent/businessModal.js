
import React, { useState } from 'react';
import { Modal, Image } from 'react-bootstrap';

import '../style/business.css';

function BusinessModalImage(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image src={props.src} onClick={handleShow} className="img-thumbnail expTop" alt="glass of coffee">
      </Image>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Image src={props.src} className="img-thumbnail modalImg">
          </Image>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BusinessModalImage;