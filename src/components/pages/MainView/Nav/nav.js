import React from "react";
//, Container
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        className="navbar-custom"
        collapaseOnSelect
        fixed="top"
        expand="lg"
      >
        <Navbar.Brand href="#">
          <h2> නොනිමි කැටපත් පවුර  </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown
              className="navLink"
              title="වෙළුම්"
              id="basic-nav-dropdown"
            >
              <Link to="/versionone">
                <NavDropdown.Item href="#Version1">
                  පලමු වෙළුම{" "}
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/">
                <NavDropdown.Item href="#Version2">
                  දෙවන වෙළුම{" "}
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/login">
              <Nav.Link className="navLink" href="#Login">
                ඇතුල් වන්න
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
