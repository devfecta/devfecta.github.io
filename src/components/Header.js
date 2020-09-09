import React, { Component } from 'react';

import { FaGithub, FaWikipediaW, FaLinkedin, FaAt, FaFile } from 'react-icons/fa';

class Header extends Component {

    render() {

        return (
            <header className="bg-light">
                <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
                    <div className="container">
                         
                        <a className="navbar-brand d-lg-none d-flex align-items-center" href="/"><img src="images/Devfecta.png" className="headerLogo" alt="DevFecta" /></a>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            
                            <a className="navbar-brand d-none d-lg-flex align-items-center" href="/">
                                <img src="images/Devfecta-Logo.png" className="headerLogo" alt="DevFecta" />
                            </a>
                            
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://github.com/devfecta" target="_blank" rel="noopener noreferrer"><FaGithub /> Public Repository </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://github.com/devfecta/devfecta.github.io/wiki" target="_blank" rel="noopener noreferrer"><FaWikipediaW /> DevFecta Wiki </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.linkedin.com/company/devfecta" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:devfecta@gmail.com"><FaAt /> Contact </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/resume"><FaFile /> Resume </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;