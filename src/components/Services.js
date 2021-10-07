import React, { Component } from 'react';
import Subscription from './Subscription';

import { FaWordpress } from 'react-icons/fa';

import '../css/Services.css';

class Services extends Component {

    componentDidMount() {
        document.title = this.props.title;
    }

    render() {

        const backgroundShape = {
            fill: "#003153",
            fillRule: "evenodd"
        };

        return (
            <div className="container-fluid h-100">
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

                <section className="row d-flex align-items-stretch justify-content-around text-center pb-4">
                    <h1 className="text-light p-3"><FaWordpress /> WordPress Website Care Plans</h1>

                    <article className="col-sm-10 col-md-5 col-lg-5 col-xl-3">
                        <Subscription 
                            title="1-Month Plan" 
                            subTitle="Ongoing Updating and Monitoring" 
                            description={<>
                                <ul className="fs-6 mx-5 text-start">
                                    <li>Updates &amp; Maintenance</li>
                                    <li>Security Scan &amp; 1 Backup</li>
                                    <li>Search Engine Readability</li>
                                    <li>Page Speed Test</li>
                                    <li>Website Optimization</li>
                                    <li>1 Hours of Personalized Support/Month</li>
                                </ul>
                            </>} 
                            pricing={<>$100/billed monthly</>} 
                            link="https://subscriptions.zoho.com/subscribe/c9ab66510705a1462cdc8324e7d90ae06a2bba0f6b053217afe8ded60e8a6aa6/WWCP-1Month" />
                    </article>

                    <article className="col-sm-10 col-md-5 col-lg-5 col-xl-3">
                        <Subscription 
                            title="3-Months Plan" 
                            subTitle="Ongoing Updating and Monitoring" 
                            description={<>
                                <ul className="fs-6 mx-5 text-start">
                                    <li>Updates &amp; Maintenance</li>
                                    <li>Security Scan &amp; 3 Backups</li>
                                    <li>Search Engine Readability</li>
                                    <li>Page Speed Test</li>
                                    <li>Website Optimization</li>
                                    <li>Sitemap Update</li>
                                    <li>2 Hours of Personalized Support/Month</li>
                                </ul>
                            </>} 
                            pricing={<>$290/billed quarterly</>} 
                            link="https://subscriptions.zoho.com/subscribe/c9ab66510705a1462cdc8324e7d90ae06a2bba0f6b053217afe8ded60e8a6aa6/WWCP-3Months" />
                    </article>

                    <article className="col-sm-10 col-md-5 col-lg-5 col-xl-3">
                        <Subscription 
                            title="6-Months Plan" 
                            subTitle="Ongoing Updating and Monitoring" 
                            description={<>
                                <ul className="fs-6 mx-5 text-start">
                                    <li>Updates &amp; Maintenance</li>
                                    <li>Security &amp; 6 Backups</li>
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Search Engine Readability</li>
                                    <li>Page Speed Test</li>
                                    <li>Website Optimization</li>
                                    <li>Sitemap Update</li>
                                    <li>Search Engine Performance Report</li>
                                    <li>3 Hours of Personalized Support/Month</li>
                                </ul>
                            </>} 
                            pricing={<>$575/billed biannually</>} 
                            link="https://subscriptions.zoho.com/subscribe/c9ab66510705a1462cdc8324e7d90ae06a2bba0f6b053217afe8ded60e8a6aa6/WWCP-6Months" />
                    </article>

                    <article className="col-sm-10 col-md-5 col-lg-5 col-xl-3">
                        <Subscription 
                            title="1-Year Plan" 
                            subTitle="Ongoing Updating and Monitoring" 
                            description={<>
                                <ul className="fs-6 mx-5 text-start">
                                    <li>Updates &amp; Maintenance</li>
                                    <li>Security &amp; 12 Backups</li>
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Search Engine Readability</li>
                                    <li>Page Speed Test</li>
                                    <li>Website Optimization</li>
                                    <li>Sitemap Update</li>
                                    <li>Search Engine Performance Report</li>
                                    <li>4 Hours of Personalized Support/Month</li>
                                </ul>
                            </>} 
                            pricing={<>$1100/billed annually</>} 
                            link="https://subscriptions.zoho.com/subscribe/c9ab66510705a1462cdc8324e7d90ae06a2bba0f6b053217afe8ded60e8a6aa6/WWCP-1Year" />
                    </article>

                    
                    
                </section>

                <section className="row d-flex justify-items-end align-items-stretch">
                    <article className="col-md-6 text-light p-5 border-bottom border-1 border-light bg-devfecta bg-transparency bg-devfecta-hover">
                        <h3>Updates &amp; Maintenance</h3>
                        <p>Periodically there are updates released for the core system of WordPress along with the installed theme, and 
                            plugins that will require updating due to updates made by the developers. If there haven't been any custom 
                            code changes to either WordPress, the theme, or plugins updates can be done through the WordPress Dashboard. 
                            If there were custom code changes made, it is highly recommended to backup all files and database(s) on the 
                            web server before updating WordPress, themes, and plugins because the udpates could overwrite any code changes. 
                            DevFecta can manage the updating processes as part of the ongoing updating and monitoring plan.</p>
                            <ul><h4>Updates &amp; Maintenance Deliverables</h4>
                                <li className="mx-4">WordPress Core Component</li>
                                <li className="mx-4">Currently Installed Parent and Child Themes <em style={ {fontSize: '85%'} }>(Parent theme subscription fee is not included in the Website Care Plan)</em></li>
                                <li className="mx-4">Currently Installed Plugins <em style={ {fontSize: '85%'} }>(Plugin subscription fees are not included in the Website Care Plan)</em></li>
                                <li className="mx-4">Update Content on Currently Existing Pages</li>
                            </ul>
                    </article>
                    <article className="col-md-6 text-dark p-5 border-bottom border-1 border-primary bg-light bg-transparency bg-light-hover">
                        <h3>Security &amp; Backups</h3>
                        <p>Website hacks are an inevitable and unfortunate part of having a website, and the effects can 
                            vary. So website monitoring, and periodic backups are necessary to have a version of the website to revert 
                            back to that doesn’t contain any of the hacked information.</p>
                            <ul><h4>Security &amp; Backups Deliverables</h4>
                                <li className="mx-4">Installation of a Security Plugin
                                    <ul>
                                        <li><strong>File Integrity</strong>: WordPress files are periodically scanned for changes, which may indicate a file has been changed, added, or deleted by hackers.</li>
                                        <li><strong>Blacklisting</strong>: If search engines flag your site as insecure, a notification is sent so action can be taken to reverse the blacklist status.</li>
                                        <li><strong>Activity Auditing</strong>: Logging of updates, login attempts, uploads, and other security-related activity for reference in the event of an error or attack.</li>
                                    </ul>
                                </li>
                                <li className="mx-4">Monthly Backup of Website Files and Database</li>
                            </ul>
                    </article>
                    <article className="col-md-6 text-light p-5 bg-devfecta bg-transparency bg-devfecta-hover">
                        <h3>Search Engine Optimization (SEO)</h3>
                        <p>Ranking high in search engine results is a constant struggle given the countless websites on the internet. 
                            DevFecta offers to monitor your website’s search results ranking, and make sure the client’s website is properly 
                            submitted and indexed in the major search engines. Also, DevFecta can make suggestions on the client’s website content 
                            to possibly improve their search results ranking.</p>
                            <ul><h4>Search Engine Optimization (SEO) Deliverables</h4>
                                <li className="mx-4">Installation of an SEO Plugin
                                    <p>This plugin is used to look for improvements to the website content to make it more search engine friendly.</p>
                                </li>
                                <li className="mx-4">Suggest and Implement Content Changes to Currently Existing Website</li>
                            </ul>
                    </article>
                    <article className="col-md-6 text-dark p-5 bg-light bg-transparency bg-light-hover ">
                        <h3>Website Optimization</h3>
                        <p>Slow loading websites are not liked by frontend users and search engines. DevFecta can monitor how 
                            fast the client’s website is loading to make sure the frontend users’ experience is enjoyable, and keep search 
                            engines interested in the client’s website by making sure the search engine can efficiently "crawl" their website.</p>
                            <ul><h4>Website Optimization Deliverables</h4>
                                <li className="mx-4">Identify Webpage Loading Bottlenecks</li>
                                <li className="mx-4">Reduce Image File Sizes for Faster Load Times</li>
                            </ul>
                    </article>
                </section>

                <section id="additionalServices" className="row bg-devfecta">
                    <article className="col-md text-light align-items-center">
                        <p className="container">Website Care Plans go into effect the day after the client subscribes to a website care plan. If there 
                        is any additional work or services required that is not part of the plan they can be addressed in a separate proposal.</p>
                    </article>
                </section>

                <section className="container-fluid bg-light">
                    <article className="container text-dark py-5">
                        <h3>Custom Websites</h3>
                        <p className="fs-4">Having a custom website is great for clients who are looking for a website that offers 
                        specific functionality to their frontend users. However, with every technology there comes updates for the scripting 
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