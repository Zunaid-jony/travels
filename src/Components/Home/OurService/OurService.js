import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './OurService.css'
import I from '../../../imgs/airport-icons .png'
import L from '../../../imgs/car.png'
import O from '../../../imgs/train.png'

const OurService = () => {
    return (
        <div className='our-service'>
            <h3>OUR AWESOME <span className='span-color'> SERVICES</span> </h3>
            <Container className='our-service2'>
                <Row  className='our-service'>
                <Col className='box ' sm={3}   >
                <Card.Img variant="top" src={O}   />
                    <h5> RAILWAY SERVICE </h5>
                    <h6 className='span-color'>$50</h6>
                    <p>One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective</p>
                
                </Col >
                <Col   className='box'sm={3}  >
                <Card.Img variant="top" src={I}  />
                    <h5> AIR SERVICE</h5>
                    <h6 className='span-color'>$200</h6>
                    <p>One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective</p>
                
                </Col>
                <Col   className='box'sm={3} >
                <Card.Img variant="top" src={L}  />
                    <h5> CAR SERVICE</h5>
                    <h6 className='span-color'>$80</h6>
                    <p>One of the service quality indicators for rail transportation system is the service evaluation from passenger’s perspective</p>
                
                </Col>

                </Row>
        
      </Container>
          <Button style={{ marginTop:'10px',marginBottom:'25px', backgroundColor: 'rgb(219, 43, 152)',  boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} >Explore More</Button>

        </div>
    );
};

export default OurService;