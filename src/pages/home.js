import React from 'react';
import { animate__animatedanimate__bounce } from 'animate.css';
import { Container, Row, Col } from 'react-bootstrap';

import  '../components/style/home.css';
import '../components/CardComponent/card.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    return (
        <Container className="mainHomeBody">
            <Row>
                <Col>
                    <h2 id="title" className="animate__animated animate__bounce">
                        Welcome...
                        </h2>
                        <small id="small">To The Many Websites Project ♥</small>
                </Col>
            </Row>
        </Container>


    );
}
export default MainPage;