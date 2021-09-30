import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";

import { FaGithub, FaWikipediaW, FaLinkedin, FaAt, FaTerminal, FaFileCode } from 'react-icons/fa';

class Header extends Component {

    render() {

        return (
            <header  className="bg-light">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
                    <div className="container">
                         
                        <a className="navbar-brand d-lg-none d-flex align-items-center" href="/"><img src="images/Devfecta.png" className="headerLogo" alt="DevFecta" /></a>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        
                        <Navbar.Collapse className="navbar-collapse collapse" id="navbarSupportedContent">
                            
                            <a className="navbar-brand d-none d-lg-flex align-items-center" href="/">
                                <img src="images/Devfecta-Logo.png" className="headerLogo" alt="DevFecta" />
                            </a>
                            
                            <Nav className="navbar-nav ml-auto">
                                <Nav.Link href="https://github.com/devfecta" target="_blank" rel="noopener noreferrer"><FaGithub /> Public Repository </Nav.Link>
                                <Nav.Link href="https://github.com/devfecta/devfecta.github.io/wiki" target="_blank" rel="noopener noreferrer"><FaWikipediaW /> DevFecta Wiki </Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/company/devfecta" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn </Nav.Link>
                                <Nav.Link href="#crmWebToEntityForm"><FaAt /> Contact </Nav.Link>
                                <Nav.Link href="/services"><FaTerminal /> Services </Nav.Link>
                                <Nav.Link href="/portfolio"><FaFileCode /> Portfolio </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}

export default Header;