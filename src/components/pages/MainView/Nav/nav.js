import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

import './Header.scss'

import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <Navbar className="navbar-custom" collapaseOnSelect fixed="top" expand="lg">
               
                    <Navbar.Brand href="#">
                   <h2>පන්හිඳ</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            
                            <NavDropdown className="navLink" title="Version" id="basic-nav-dropdown">
                                
                                <Link to="/"> 
                                    <NavDropdown.Item href="#Version1">Version One</NavDropdown.Item>
                                </Link> 
                                <NavDropdown.Divider />
                                <Link to="/versiontwo">
                                    <NavDropdown.Item href="#Version2">Version Two </NavDropdown.Item>
                                </Link> 
                               
                                
                            </NavDropdown>
                            <Link to="/login">
                                <Nav.Link className="navLink" href="#Login">Login</Nav.Link>
                            </Link>
                           
                           
                        </Nav>
                     
                    </Navbar.Collapse>
                   
            </Navbar>
        </>
    )
}

export default Header;
