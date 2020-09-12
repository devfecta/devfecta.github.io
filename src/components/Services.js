import React, { Component } from 'react';

import Service from './Service';

class Services extends Component {

    render() {

        return (

            <section>
                <div id="serviceImage" className="w-100"></div>
                <article id="serviceArticle">
                    
                    
                    <div id="serviceIntro" className="row text-light d-flex align-items-center">
                            <p className="container">DevFecta is a web development, design, and consulting company based in Madison, Wisconsin that offers professional 
                                website design, web development, and graphic design services. In addition, I also offer consulting services for 
                                when you just need a little help with a current web project.</p>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-3 d-flex align-items-stretch">
                            <Service 
                                title="Development" 
                                description={<>DevFecta's web development and programming expertise integrates custom programming and design to 
                                    create interactive web systems that will grow with your business. I understand that your website should 
                                    reflect who you are, and is a primary contact for your business.<br/><br/>Your goals are at the forefront of every 
                                    project I do and will provide reliable ongoing tech support to my clients.</>} />
                        </div>
                        <div className="col-md-3 d-flex align-items-stretch">
                            <Service 
                                title="Design" 
                                description={<>DevFecta develops websites of all sizes. My web design process can either start 
                                    completely from scratch, or with the dynamic CMS Wordpress that can customized to meet your business needs. 
                                    With my years experience I can create a completely customized web solution that will grow with your business.<br/><br/>
                                    Give your business an online web presence with information about your products or services. Your website will 
                                    be custom designed and developed to meet the needs of your business.</>} />
                        </div>
                        <div className="col-md-3 d-flex align-items-stretch">
                            <Service 
                                title="Consulting" 
                                description={<>Got a web project that's grown and just need a little extra help, or just can't figure out an issue 
                                    on your website? DevFecta can help! I can sit down and meet with you to find the best solution to help you with 
                                    your web project.</>} />
                        </div>
                    </div>
                </article>

                <article id="portfolioArticle" className="row d-flex justify-content-center">
                    <a href="/resume" className="btn btn-primary">View My Resume</a>
                </article>
            </section>
        );
    }
}

export default Services;