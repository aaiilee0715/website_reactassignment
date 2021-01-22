import React from 'react';
import { animate__animatedanimate__bounce } from 'animate.css';
import { Container, Row, Col, CardDeck, Card, } from 'react-bootstrap';

import Style from '../components/style/home.css';
import Images from '../components/images/business.png';
const MainPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3 id="title" className="animate__animated animate__bounce">Welcome To The Many Websites</h3>
                </Col>

                <CardDeck>
                   
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" id="businessPix" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                    
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>

            </Row>
        </Container>


    );
}
export default MainPage;