import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

//import Service from './Service';

import { FaWordpress } from 'react-icons/fa';


import '../css/Services.css';

class Services extends Component {

    render() {

        const backgroundShape = {
            fill: "#003153",
            fillRule: "evenodd",
        };

        return (
            <div className="container-fluid bg-white h-100">
                <section className="row">

                    <svg xmlns="https://www.w3.org/2000/svg" id="servicesSVG" viewBox="0 0 100 500" preserveAspectRatio="none">
                        <polygon points="0,0 100,0 100,350 50,500 0,350" style={backgroundShape} />
                    </svg>

                    <article id="servicesIntro" className="text-light align-items-center">
                        <p className="container">DevFecta and its partners want to make sure your website is up-to-date and functioning 
                        to its highest potential. This is why we offer ongoing Website Care Plans to our clients. These plans take the 
                        stress and time commitment it takes to maintain a professional website.</p>
                        <p className="container">There are a variety of Website Care Plans available to the clients based on how long 
                        they would like DevFecta to manage their website. Depending on the type of website, listed below is what our 
                        client receives based on the Website Care Plan they choose.</p>
                    </article>
                        
                </section>

                <section className="row d-flex align-items-stretch text-center">
                    <h1 className="text-light p-3"><FaWordpress /> WordPress Website Care Plans</h1>
                    <article className="col-md-3 text-light p-5 border-bottom border-1 border-light bg-devfecta bg-transparency">
                        <h3>1-Month</h3>
                        <h5>Ongoing Updating and Monitoring</h5>
                        <p className="h4">$100/billed monthly</p>
                    </article>
                    <article className="col-md-3 text-dark p-5 border-top border-bottom border-1 border-primary bg-light bg-transparency">
                        <h3>3-Months</h3>
                        <h5>Ongoing Updating and Monitoring</h5>
                        <p className="h4">$290/billed quarterly</p>
                    </article>
                    <article className="col-md-3 text-light p-5 border-bottom border-1 border-light bg-devfecta bg-transparency">
                        <h3>6-Months</h3>
                        <h5>Ongoing Updating and Monitoring</h5>
                        <p className="h4">$575/billed biannually</p>
                    </article>
                    <article className="col-md-3 text-dark p-5 border-top border-bottom border-1 border-primary bg-light bg-transparency">
                        <h3>1-Year</h3>
                        <h5>Ongoing Updating and Monitoring</h5>
                        <p className="h4">$1100/billed annually</p>
                    </article>
                </section>

                <section className="row d-flex justify-items-end align-items-stretch">
                    <article className="col-md-6 text-light p-5 border-bottom border-1 border-light bg-devfecta bg-transparency bg-devfecta-hover">
                        <h3>Updates &amp; Maintenance</h3>
                        <p>Periodically there are updates released for the core system of WordPress along with the installed theme, and 
                            plugins that will require updating due to updates made by the developers. If there haven't been any custom 
                            code changes to either WordPress, the theme, or plugins updates can be done through the WordPress Dashboard. 
                            If there were custom code changes made, it is highly recommended to backup all files and database(s) on the 
                            web server before updating WordPress, themes, and plugins. DevFecta can manage the updating processes as 
                            part of the ongoing updating and monitoring plan.</p>
                    </article>
                    <article className="col-md-6 text-dark p-5 border-bottom border-1 border-primary bg-light bg-transparency bg-light-hover">
                        <h3>Security &amp; Backups</h3>
                        <p>Website hacks are an inevitable and unfortunate part of having a website, and the effects can 
                            vary. So website monitoring, and periodic backups are necessary to have a version of the website to revert 
                            back to that doesn’t contain any of the hacked information.</p>
                    </article>
                    <article className="col-md-6 text-light p-5 bg-devfecta bg-transparency bg-devfecta-hover">
                        <h3>Search Engine Optimization (SEO)</h3>
                        <p>Ranking high in search engine results is a constant struggle given the countless websites on the internet. 
                            DevFecta offers to monitor your website’s search results ranking, and make sure the client’s website is properly 
                            submitted and indexed in the major search engines. Also, DevFecta can make suggestions on the client’s website content 
                            to possibly improve their search results ranking.</p>
                    </article>
                    <article className="col-md-6 text-dark p-5 bg-light bg-transparency bg-light-hover ">
                        <h3>Website Optimization</h3>
                        <p>Slow loading websites are not liked by frontend users and search engines. DevFecta can monitor how 
                            fast the client’s website is loading to make sure the frontend users’ experience is enjoyable, and keep search 
                            engines interested in the client’s website by making sure the search engine can efficiently "crawl" their website.</p>
                    </article>
                </section>

                <section id="additionalServices" className="row bg-devfecta">
                    <article className="col-md text-light align-items-center">
                        <p className="container">Website Care Plans go into effect the day after the client's website goes live. If there 
                        is any additional work or services required that is not part of the plan they can be addressed in a separate proposal.</p>
                    </article>
                </section>

                <section className="container-fluid bg-light">
                    <article className="container text-dark py-5">
                        <h3>Custom Websites</h3>
                        <p className="fs-4">Having a custom website is great for clients who are looking for a website that offers s
                        pecific functionality to their frontend users. However, with every technology there comes updates for the scripting 
                        language and database. DevFecta can monitor and make any necessary code and/or database changes to make sure the 
                        client’s website is compliant with the latest technology.</p>
                        <a className="btn btn-primary" href="mailto:devfecta@gmail.com">Contact DevFecta for an Estimate</a>
                    </article>
                </section>
            </div>
        );
    }
}

export default Services;