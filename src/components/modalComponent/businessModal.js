
import React, {useState} from 'react';
import {Modal, Image, Button} from 'react-bootstrap';

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
          <Modal.Body>

            <h3>{props.name}</h3>
              <Image src={props.src} className="img-thumbnail modalImg">
              </Image>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default BusinessModalImage;