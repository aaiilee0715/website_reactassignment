import React from 'react';
import { animate__animatedanimate__bounce } from 'animate.css';
import { Container, Row, Col } from 'react-bootstrap';

import Style from '../components/style/home.css';



const MainPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3 id="title" className="animate__animated animate__bounce">
                        Welcome To The Many Websites Project
                        </h3>
                </Col>
            </Row>
        </Container>


    );
}
export default MainPage;