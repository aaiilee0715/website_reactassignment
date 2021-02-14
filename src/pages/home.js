import React from 'react';
import {animate__bounceOut } from 'animate.css';
import { Container, Row, Col } from 'react-bootstrap';
import   ParticlesBackground from '../components/CardComponent/particles';
import  '../components/style/home.css';
import '../components/CardComponent/card.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    return (
        <>
          
        <Container className="mainHomeBody">
            <Row>
                <Col>
        {/* <ParticlesBackground /> */}
                    <h2 id="title" className="animate__bounceOut">
                        Welcome...
                        </h2>
                        <small id="small" className="animate__heartBeat">To The Many Websites Project ♥</small>
                </Col>
            </Row>
        </Container>
        </>

    );
}
export default MainPage;