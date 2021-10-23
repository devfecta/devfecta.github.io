import React, { Component } from 'react';
import { FaWordpress } from 'react-icons/fa';
import Portfolio from './portfolio/Portfolio';

import '../css/Portfolio.css';

class Portfolios extends Component {

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
                                loading="lazy"
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

                    <Portfolio.Prosource classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.FirstRespondWell classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.FirstDueConstruction classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.MetalDecorStudios classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.AltsOperation classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.Scrtac classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.Scwiherc classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.Townedge classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.Monkeyshines classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.Kinergetics classes="col-md-6" technologies={this.props.resumeData.technologies} />

                </section>

                <section className="row d-flex align-items-stretch bg-dark">

                    <h1 className="text-light p-3 text-center">Custom Development</h1>
                    
                    <Portfolio.Wsfia classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.KinergeticsEnergyMatrix classes="col-md-6" technologies={this.props.resumeData.technologies} />

                    <Portfolio.DevFecta classes="col-md-6" technologies={this.props.resumeData.technologies} />

                </section>

                <section className="row d-flex align-items-stretch bg-dark">

                    <h1 className="text-light p-3 text-center">Consulting Work</h1>
                    <p className="text-light text-center">DevFecta does perform more consulting work for clients listed above and below, as needed.</p>
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

export default Portfolios;