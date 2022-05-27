import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bennars from '../../../imgs/travel-bennar.jpg'
import './Header.css'

const HeaderBennar = () => {
    return (
      <div className="Banner-img">
            <Container>
                <Row >
                <Col className="bennar-tex" sm='4' md='6' >
                    <h2> ALL TRAVELERS</h2>
                    <h2>PEOPLE SERVICES 24 HOURS </h2>
                    <p>Get Results for Travel Insurance Us. Find Quick

                        Results from Multiple Sources. Quick Results - Search

                        for Relevant Info & Results. Discover All the Answers. Simple in use. Fast and trusted. Multiple sources combined.</p>
                
                
                </Col>

                <Col sm='4' md='6'><img src={Bennars}></img></Col>
                </Row>
        
      </Container>
      </div>
    );
};

export default HeaderBennar;