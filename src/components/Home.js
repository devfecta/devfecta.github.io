import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaGithub, FaPhone, FaLinkedin, FaAt, FaFile, FaMapMarkerAlt } from 'react-icons/fa';

import Service from './Service';

import GoogleMap from './GoogleMap';

import '../css/Home.css';

class Home extends Component {

    render() {

        return (
            
            <div className="container-fluid bg-devfecta">

                <section className="row">
                    
                    <article>
                        <div id="homeImage" className="w-100"></div>
                        <div id="homeIntro" className="px-3 text-light d-flex align-items-center">
                                <p className="container">DevFecta (<em>duh·eh·vuh·fek·tuh</em>) is a web development, design, and consulting company based in Madison, Wisconsin that offers professional 
                                    website design, web development, and graphic design services. In addition, I also offer consulting services for 
                                    when you just need a little help with a current web project.</p>
                        </div>
                    </article>
                </section>

                <section className="row d-flex justify-content-center pb-2">
                    <article className="col-sm-10 col-md-5 col-lg-3 d-flex align-items-stretch">
                        <Service 
                            title="Development" 
                            description={<>DevFecta's web development and programming expertise integrates custom programming and design to 
                                create interactive web systems that will grow with your business. I understand that your website should 
                                reflect who you are, and is a primary contact for your business.<br/><br/>Your goals are at the forefront of every 
                                project I do and will provide reliable ongoing tech support to my clients.</>} />
                    </article>
                    <article className="col-sm-10 col-md-5 col-lg-3 d-flex align-items-stretch">
                        <Service 
                            title="Design" 
                            description={<>DevFecta develops websites of all sizes. My web design process can either start 
                                completely from scratch, or with the dynamic CMS Wordpress that can customized to meet your business needs. 
                                With my years experience I can create a completely customized web solution that will grow with your business.<br/><br/>
                                Give your business an online web presence with information about your products or services. Your website will 
                                be custom designed and developed to meet the needs of your business.</>} />
                    </article>
                    <article className="col-sm-10 col-md-5 col-lg-3 d-flex align-items-stretch">
                        <Service 
                            title="Consulting" 
                            description={<>Got a web project that's grown and just need a little extra help, or just can't figure out an issue 
                                on your website? DevFecta can help! I can sit down and meet with you to find the best solution to help you with 
                                your web project.</>} />
                    </article>
                </section>

                <section id="contactSection" className="row bg-dark d-flex justify-content-center">
                    
                    <article className="col-md-6 text-light d-flex justify-content-center align-items-center">
                        <address style={{ listStyleType: "none", lineHeight: "2em" }}>
                            <strong className="h3">DevFecta, LLC</strong><br />
                            <FaMapMarkerAlt /> 1574 W Broadway Suite 200, Madison, WI 53713<br />
                            <FaPhone /> <a href="tel:+1608-334-7200" className="text-light">(608) 334-7200</a><br />
                            <FaAt /> <a href="mailto:kkelm@devfecta.com" className="text-light">kkelm@devfecta.com</a><br />
                            <FaLinkedin /> <a href="https://www.linkedin.com/company/devfecta" className="text-light" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/company/devfecta</a><br />
                            <FaGithub /> <a href="https://github.com/devfecta" className="text-light" target="_blank" rel="noopener noreferrer">https://github.com/devfecta</a><br />
                            <FaFile /> <Link to="/resume" className="text-light">Resume</Link>
                        </address>
                    </article>

                    <div className="col-md-6 d-flex justify-content-center">
                            <GoogleMap />
                    </div>

                </section>
                
            </div>
        );
    }
}

export default Home;