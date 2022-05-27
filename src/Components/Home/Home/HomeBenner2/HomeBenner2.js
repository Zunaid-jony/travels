import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bennars from '../../../../imgs/home-benner2.jpg'
import './HomeBenner2.css'
 import { ImManWoman } from 'react-icons/im';
 import { FcServices } from 'react-icons/fc';

const HomeBenner2 = () => {
    return (
      <div className="Banner-imgs">
            <Container>
                <Row >
                <Col sm='4' md='6'><img src={Bennars}></img></Col>
                <Col className="bennar-texs" sm='4' md='6' >
                    <h4> LET US HANDLE YOUR</h4>
                    <h4>TULLY BAG <span style={{color:'rgb(219, 43, 152)'}}> PLACE WAIT!</span>  </h4>
                    <p>Get Results for Travel Insurance Us. Find Quick

                        Results from Multiple Sources. Quick Results - Search

                        for Relevant Info & Results. Discover All the Answers. Simple in use. Fast and trusted. Multiple sources combined.</p>
                       <Container>
                           
                           <Row>
                           <Col   >  <span style={{color:'rgb(219, 43, 152)'}}> <h4 >  <ImManWoman></ImManWoman>  500+</h4></span> 
                           <p>Happy Customer</p>
                           
                           </Col>
                           <Col>  <span style={{color:'rgb(219, 43, 152)'}}> <h4><FcServices></FcServices> 300+</h4></span> 
                           <p>Total Service</p>
                           </Col>
                           </Row>
                         
                       </Container>
                
                </Col>

                
                </Row>
        
      </Container>
      </div>
    );
};

export default HomeBenner2;