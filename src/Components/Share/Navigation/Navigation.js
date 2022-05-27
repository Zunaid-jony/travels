import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IMG from '../../../imgs/logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='naver-area'>
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand ><img style={{width: '70px'}} src={IMG}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                
                <Nav.Link ><Link className='header' to='/'>Home</Link></Nav.Link>
                <Nav.Link ><Link className='header' to='/outTem'>Our Team</Link></Nav.Link>
                <Nav.Link ><Link className='header' to='/contact'>Contact Us</Link></Nav.Link>
                <Nav.Link ><Link className='header' to='/dashboard'>Dashboard</Link></Nav.Link>
                <Nav.Link ><Link className='header' to='/login'><button bg="info"> Login</button> </Link></Nav.Link>
              
               
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
           
            
        </div>
    );
};

export default Navigation;