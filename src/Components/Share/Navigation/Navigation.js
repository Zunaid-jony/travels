import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IMG from '../../../imgs/last-logo.png'
import './Navigation.css'
import useAuth from './../../../hooks/useAuth';

const Navigation = () => {
    const {user, logout} = useAuth();
    return (
        <div className='naver-area'>
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{}}>
                <Container>
                <Navbar.Brand ><img style={{width: '40px', height:'40px'}} src={IMG}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                
                <Nav.Link ><Link className='header' to='/'>Home</Link></Nav.Link>
                <Nav.Link ><Link className='header' to='/service'>Service</Link></Nav.Link>
                <Nav.Link ><Link className='header' to='/contact'>Contact Us</Link></Nav.Link>
                <Nav.Link ><Link className='header' to='/dashboard'>Dashboard</Link></Nav.Link>
               { user?.email?
                   <Button  className='header' onClick={logout} color="inherit">Logout</Button> :

                  <Nav.Link ><Link className='header' to='/login'><button bg="info"> Login</button> </Link></Nav.Link>
               }
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
           
            
        </div>
    );
};

export default Navigation;