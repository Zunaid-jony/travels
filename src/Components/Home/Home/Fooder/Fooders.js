import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import I from '../../../../imgs/Vector.png'
import L from '../../../../imgs/Vector-1.png'
import O from '../../../../imgs/Vector-2.png'
import V from '../../../../imgs/Vector-3.png'

const Footers = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-color">
            {" "}
            <h6>Dhaka,Road#0988</h6>
            <h6>Mohakhali dhaka,Bangladash</h6>
          </Col>

          <Col className="text-color">
            {" "}
            <h6>Company </h6>
            <p>Project </p>
            <p>Service </p>
            <p>Project </p>
            
          </Col>

          <Col className="text-color">
            {" "}
            <h6>Quick Links</h6>
            <p>Project </p>
            <p>Service </p>
            <p>Project </p>
            <p>Service </p>
          </Col>

          <Col className="text-color">
            {" "}
            <h6>About Us</h6>
            <p>
              A self-motivated, committed and enthusiastic frontend developer
               about building web applications in JavaScript
              (including React.js).Love..
              
            </p>
            <p > <img src={I}></img>
              <img src={L}></img>
              <img src={O}></img>
              <img src={V}></img></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footers;
