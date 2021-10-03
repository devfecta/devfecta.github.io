import React, { Component } from 'react';
import { FaWordpress } from 'react-icons/fa';

import '../css/Portfolio.css';

class Portfolio extends Component {

    constructor() {
        super();
        this.portfolio = "";
    }

    componentDidMount() {
        document.title = this.props.title;
    }

    render() {

        if (this.props.resumeData.portfolio) {

            this.portfolio = this.props.resumeData.portfolio.map( (item, index) => {
                return (
                
                    <div key={index} className="col-md-4 col-lg-2 mb-5">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-devfecta">{item.name}</div>
                            </div>
                            <img className="img-fluid" 
                                src={item.image}
                                alt={item.name} 
                            />
                        </div>
                    </div>
                
                
                );
            });

        }

        
        

        return (

            <div className="container-fluid bg-white">
                <section className="row d-flex align-items-stretch bg-dark">

                    <h1 className="text-light p-3 text-center"><FaWordpress /> WordPress Development</h1>
                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Prosource</h2>
                        <a href="https://prosourcepayments.com" target="_blank" rel="noopener noreferrer">prosourcepayments.com</a>
                        <p>Prosource is a WordPress project that in addition to developing a WordPress website I've also setup the hosting of 
                            the website on Google Cloud Platform (GCP). This invovled the creation and configuration of 2 Compute Engines, one to 
                            handle Apache and PHP, and the other to handle MySQL. Also, I had to reconfigure the domain to point to the server and 
                            install an SSL certificate.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>First, Respond Well</h2>
                        <a href="https://firstrespondwell.org" target="_blank" rel="noopener noreferrer">firstrespondwell.org</a>
                        <p>First, Respond Well is a Wordpress project that involves the setup of hosting and email service on Bluehost.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>First Due Construction</h2>
                        <a href="https://firstdueconstructionllc.com" target="_blank" rel="noopener noreferrer">firstdueconstructionllc.com</a>
                        <p>First Due Construction is starting off as a single page Wordpress project that involves the setup of hosting and email service on Bluehost.
                            The owner just wanted to have a place for potential clients to find him on the web, and answer a questionaire he created.
                        </p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Metal Decor Studios</h2>
                        <a href="https://metaldecorstudios.com" target="_blank" rel="noopener noreferrer">metaldecorstudios.com</a>
                        <p>The development for Metal Decor Studios started off fairly simple with collecting information on what they would 
                            like on the website, and setting up WordPress and installing plugins is fairly easy. However, the learning came 
                            in when I had to integrate PayPal with the WooCommerce plugin, and figuring out how taxes and shipping costs work 
                            in WooCommerce was a little bit of a challenge because the products he sells come in a variety of weights and sizes. 
                            So this issue really wasn’t a development issue, but more of a business decision and setting up a variety of shipping 
                            methods. Another learning experience that came out of this was memory usage on shared hosting.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Alt's Operation</h2>
                        <a href="https://www.altsoperation.com" target="_blank" rel="noopener noreferrer">altsoperation.com</a>
                        <p>Alt's Operation is a WordPress project that involved the setup of a hosting and email service on GoDaddy.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>South Central Regional Trauma Advisory Council</h2>
                        <a href="https://www.scrtac.org" target="_blank" rel="noopener noreferrer">scrtac.org</a>
                        <p>SCRTAC was a WordPress project that involved me setting up the client with a GoDaddy account and installing WordPress 
                            on their hosting service. Also, I set them up with a WordPress theme and the plugins they needed to share documents 
                            and sell tickets to their annual conference. For them to sell the tickets I had to set up the WooCommerce plugin 
                            with the additional WooCommerce Box Office plugin, and integrate WooCommerce with their PayPal account.</p>
                    </article>
                    
                    <article className="portfolio-article col-md-6 p-5">
                        <h2>South Central Wisconsin Healthcare Emergency Readiness Coalition</h2>
                        <a href="http://www.scwiherc.org" target="_blank" rel="noopener noreferrer">scwiherc.org</a>
                        <p>SCWIHERC was a WordPress project that involved me setting up the client with a GoDaddy account and installing WordPress 
                            on their hosting service. I also set them up with a WordPress theme and the plugins they needed to share documents, 
                            display their Google calendar, manage users. In addition to the WordPress setup, I helped them setup e-mail addresses, 
                            and a year later I helped them switch their domain from southcentralhcc.org to scwiherc.org.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Townedge</h2>
                        <a href="https://townedgematerials.com" target="_blank" rel="noopener noreferrer">townedgematerials.com</a>
                        <p>Townedge was a quick WordPress project where the client just wanted to display the landscaping supplies he sells. Since 
                            he has worked with me in the past, I just had to setup the domain name under his current GoDaddy account and setup WordPress. 
                            Also, I created a custom shortcode that calculates how many yards of material is need for a given space.
                            <a href="https://townedgematerials.com/calculators/" target="_blank" rel="noopener noreferrer"> townedgematerials.com/calculators/</a></p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Monkeyshines</h2>
                        <a href="http://www.monkeyshinesbarandgrill.com" target="_blank" rel="noopener noreferrer">monkeyshinesbarandgrill.com</a>
                        <p>Monkeyshines wanted to just display their menu and events they have at the bar. So this project involved the setup of a 
                            GoDaddy account, installation of WordPress with a theme and plugins.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Kinergetics</h2>
                        <a href="https://www.kinergetics.net" target="_blank" rel="noopener noreferrer">kinergetics.net</a>
                        <p>Kinergetics just wanted to have a presence on the web. The client already had a hosting service through Hostway. So this 
                            project only involved the installation of WordPress with a theme and plugins.</p>
                    </article>

                </section>

                <section className="row d-flex align-items-stretch bg-dark">

                    <h1 className="text-light p-3 text-center">Custom Development</h1>
                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Wisconsin State Fire Inspectors Association</h2>
                        <p className="caption">(Node.js, PHP &amp; MySQL Development)</p>
                        <a href="https://wsfia.org" target="_blank" rel="noopener noreferrer">wsfia.org</a>
                        <p>Since I took over WSFIA's website it has gone through 3 major versions, and all 3 have taken different approaches to make it 
                            easier to use for the association members. The first version was essentially a rehash of the old website, but with 
                            pdated code using just PHP and MySQL.</p>

                        <p>The second version was a complete overhaul using WordPress and PayPal. We went with WordPress in hopes to eventually have 
                            certain members take over the editing of most of the content, however I ended up doing most of the editing. In addition to 
                            the new look, I created a plugin for the membership login and registration, and conference registration in efforts to make 
                            those processes easier to use while using the WordPress framework and PayPal integration.</p>

                        <p>The third and current version is written in PHP, Node.js, and EJS for templating with PayPal integration. Also, it is hosted 
                            on the Google Cloud Platform. This gave me essentially free reign to learn and try new things to improve their website.</p>

                        <p>I know the website doesn't look like much, however I needed to really simplify the processes.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Kinergetics' Energy Matrix</h2>
                        <p className="caption">(Vanilla JS, PHP, &amp; MySQL Development)</p>
                        <p>Kinergetics wants to be able to show their customers real-time sensor data to their customers. This is a work in progress, 
                            but here’s what me and the other two people working on this project have to do.</p>

                        <p>What needs to be done is pull data from sensors using webhooks into a database. Then transform the data by calling methods, 
                            written in PHP and Vanilla JS, to return calculated data points that will then be displayed in a graph in a website/web app.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>DevFecta</h2>
                        <p className="caption">(React)</p>
                        <a href="https://devfecta.com" target="_blank" rel="noopener noreferrer">devfecta.com</a>
                        <p>DevFecta is my own website and is serving as a way for me to learn React and Google Cloud Platform. So far in addition 
                            to learning React I'm also experimenting with installing my own SSL certificates and hosting multiple websites on 
                            1 GCP virtual machine.</p>
                    </article>

                </section>

                <section className="row d-flex align-items-stretch bg-dark">

                    <h1 className="text-light p-3 text-center">Consulting Work</h1>
                    <p className="text-light text-center">I do perform more consulting work for clients listed above and below, as needed.</p>
                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Sunset Yarn</h2>
                        <p className="caption">(WordPress &amp; Square Consulting)</p>
                        <a href="https://sunsetyarn.com" target="_blank" rel="noopener noreferrer">sunsetyarn.com</a>
                        <p>Sunset Yarn started off as a Wordpress project that involves the setup of hosting and email service on Bluehost, 
                            and the moving of the domain name from the hosting service Hostway. Along with the setup of WooCommerce, 
                            and the integration of WooCommerce with the Square payment processing service.</p>
                        <p>Eventually, WordPress was found to be cumbersome for the client, and involved duplicating work between WooCommerce 
                            and Square. So to alleviate the problem of the duplication of work we pointed the domain to Square, and this 
                            allows the client to enter all of the product information into only one area.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Be Dynamic Training &amp; Firefighter Dynamic Performance Training</h2>
                        <p className="caption">(WordPress &amp; Design Consulting)</p>
                        <a href="https://bedynamictraining.com" target="_blank" rel="noopener noreferrer">bedynamictraining.com</a> &nbsp; | &nbsp; 
                        
                        <a href="https://fd-pt.com" target="_blank" rel="noopener noreferrer">fd-pt.com</a>
                        <p>These projects mostly involved modification of graphics and the creation of a brochure, but I also helped the client 
                            organize his workout programs using a WordPress plugin he purchased and integrate the purchase of subscriptions 
                            to those programs with WooCommerce.</p>
                    </article>

                </section>

                <section className="row d-flex align-items-stretch bg-dark">

                    <h1 className="text-light p-3 text-center">Notable Work</h1>
                    <article className="portfolio-article col-md-6 p-5">
                        <h2>AdHound</h2>
                        <p className="caption">(JS, PHP &amp; MySQL Development)</p>
                        <p>AdHound was a project for media distribution professionals with a customizable advertisement placement tracking 
                            system, and also ad performance and accounting reports. I also needed to address the ability for media distribution 
                            professionals to assign multiple users/assistants under their account, and assign those users with specific 
                            viewing and editing privileges.</p>

                        <p>This project was built from the database on up. I started with laying out the database schema using Draw.io to 
                            make a basic Entity Relationship Diagram (ERD), and then created SQL files in the project's database directory 
                            that could be imported into the database. These SQL files also contained test data that I could use throughout 
                            the development process.</p>

                        <p>Another consideration for this project was "mobile first". One of the goals for this application was to run on 
                            phones and tablets, so I incorporated Bootstrap CSS to make it easier for the application to adjust to certain screen sizes.</p>
                    </article>

                    <article className="portfolio-article col-md-6 p-5">
                        <h2>Winding Brook Lodge</h2>
                        <p className="caption">(ASP.Net &amp; SQL Development)</p>
                        <p>This was a website I did for Lyn (the founder of Paradigm) after I left the company, and it was written in ASP.Net. 
                            This project gave me an opportunity to learn more about ASP.Net by creating a registration and login process, 
                            along with a process for users to book a stay at his cabin.</p>
                    </article>

                </section>

                <section className="row d-flex align-items-stretch bg-light portfolio" id="portfolio">

                    <h1 className="text-light bg-dark p-3 text-center">Design Work</h1>
                    <div className="container">
                        <div className="row justify-content-center">

                            {this.portfolio}

                        </div>
                    </div>

                </section>
            </div>

        );
    }
}

export default Portfolio;