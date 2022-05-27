import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Message.css'

const Message = () => {
    return (
        <div className='bg-color'>
            <br></br>
            <h4>LET US HANDLE YOUR</h4>
            <h4>PROJECT PROFESSIONALLY</h4>
            <br></br>
          <Container className='from-size'>
          <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
               
                <Form.Control placeholder="Fast Name"  />
               
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="Last Name"  />
               
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
               
                    <Form.Control type="text" placeholder="Enter email" />
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                    <Form.Control type="text" placeholder="   Send Message" />
                </Form.Group>
              
                <Button variant="" type="">
                    Send Message
                </Button>
            </Form>
          </Container>
        </div>
    );
};

export default Message;