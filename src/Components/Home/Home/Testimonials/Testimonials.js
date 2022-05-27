import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css'
import I from '../../../../imgs/Ellipse 90.png'
import { BsFillStarFill } from 'react-icons/bs';


const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h3>Testimo<span className='span-color'>nials</span> </h3>
            <Container className='tes-body'>
                <Row  className='our-service'>
                <Col sm={3}    >
                <Card.Img variant="top"    />
                    <h5> <img src={I}></img> RAILWAY SERVICE </h5>
                
                    <p>One of the service quality indicators for rail transportation system is the service evaluation from passenger’s </p>
                     <p style={{color:'gold',textAlign: 'left'}}> <BsFillStarFill></BsFillStarFill> 
                     
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     
                      </p>
                </Col >
                <Col   sm={3}  >
                <Card.Img variant="top"  />
                    <h5> <img src={I}></img> AIR SERVICE

                    </h5>
                   
                    <p>One of the service quality indicators for rail transportation system is the service evaluation from passenger’s </p>
                    <p style={{color:'gold',textAlign: 'left'}}> <BsFillStarFill></BsFillStarFill> 
                     
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     
                      </p>
                </Col>
                <Col   sm={3} >
                <Card.Img variant="top"  />
                    <h5><img src={I}></img> CAR SERVICE</h5>
                 
                    <p>One of the service quality indicators for rail transportation system is the service evaluation from passenger’s </p>
                    <p style={{color:'gold',textAlign: 'left'}}> <BsFillStarFill></BsFillStarFill> 
                     
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     <BsFillStarFill></BsFillStarFill>
                     
                      </p>
                </Col>

                </Row>
        
      </Container>
         

        </div>
    );
};

export default Testimonials;