import React, { Component } from 'react';
import Website from './Website';

const Portfolio = ({item}) => item;

Portfolio.Prosource = class Prosource extends Component {

    componentDidMount() {
        document.title = this.props.title;
    }
    

    render() {


        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php8":
                    case "mysql":
                    case "gcp":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Prosource" 
                description={<>
                    <p>Prosource is a WordPress project that in addition to developing a WordPress website I've also setup the hosting of 
                    the website on Google Cloud Platform (GCP). This invovled the creation and configuration of 2 Compute Engines, one to 
                    handle Apache and PHP, and the other to handle MySQL. Also, I had to reconfigure the domain to point to the server and 
                    install an SSL certificate.</p>
                </>} 
                url="https://prosourcepayments.com" 
                urlText="prosourcepayments.com" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.FirstRespondWell = class FirstRespondWell extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="First, Respond Well" 
                description={<>
                    <p>First, Respond Well is a Wordpress project that involves the setup of hosting and email service on Bluehost.</p>
                </>} 
                url="https://firstrespondwell.org" 
                urlText="firstrespondwell.org" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />            
        );
    }
}

Portfolio.FirstDueConstruction = class FirstDueConstruction extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="First Due Construction" 
                description={<>
                    <p>First Due Construction is starting off as a single page Wordpress project that involves the setup of hosting and email 
                    service on Bluehost. The owner just wanted to have a place for potential clients to find him on the web, and answer a 
                    questionaire he created.</p>
                </>} 
                url="https://firstdueconstructionllc.com" 
                urlText="firstdueconstructionllc.com" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.MetalDecorStudios = class MetalDecorStudios extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Metal Decor Studios" 
                description={<>
                    <p>The development for Metal Decor Studios started off fairly simple with collecting information on what they would 
                    like on the website, and setting up WordPress and installing plugins is fairly easy. However, the learning came 
                    in when I had to integrate PayPal with the WooCommerce plugin, and figuring out how taxes and shipping costs work 
                    in WooCommerce was a little bit of a challenge because the products he sells come in a variety of weights and sizes. 
                    So this issue really wasn’t a development issue, but more of a business decision and setting up a variety of shipping 
                    methods. Another learning experience that came out of this was memory usage on shared hosting.</p>
                </>} 
                url="https://metaldecorstudios.com" 
                urlText="metaldecorstudios.com" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.AltsOperation = class AltsOperation extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Alt's Operation" 
                description={<>
                    <p>Alt's Operation is a WordPress project that involved the setup of a hosting and email service on GoDaddy.</p>
                </>} 
                url="https://altsoperation.com" 
                urlText="altsoperation.com" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.Scrtac = class Scrtac extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="South Central Regional Trauma Advisory Council" 
                description={<>
                    <p>SCRTAC was a WordPress project that involved me setting up the client with a GoDaddy account and installing WordPress 
                    on their hosting service. Also, I set them up with a WordPress theme and the plugins they needed to share documents 
                    and sell tickets to their annual conference. For them to sell the tickets I had to set up the WooCommerce plugin 
                    with the additional WooCommerce Box Office plugin, and integrate WooCommerce with their PayPal account.</p>
                </>} 
                url="https://scrtac.org" 
                urlText="scrtac.org" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.Scwiherc = class Scwiherc extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="South Central Wisconsin Healthcare Emergency Readiness Coalition" 
                description={<>
                    <p>SCWIHERC was a WordPress project that involved me setting up the client with a GoDaddy account and installing WordPress 
                    on their hosting service. I also set them up with a WordPress theme and the plugins they needed to share documents, 
                    display their Google calendar, manage users. In addition to the WordPress setup, I helped them setup e-mail addresses, 
                    and a year later I helped them switch their domain from southcentralhcc.org to scwiherc.org.</p>
                </>} 
                url="http://scwiherc.org" 
                urlText="scwiherc.org" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.Townedge = class Townedge extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Townedge" 
                description={<>
                    <p>Townedge was a quick WordPress project where the client just wanted to display the landscaping supplies he sells. Since 
                    he has worked with me in the past, I just had to setup the domain name under his current GoDaddy account and setup WordPress. 
                    Also, I created a custom shortcode that calculates how many yards of material is need for a given space.
                    <a href="https://townedgematerials.com/calculators/" target="_blank" rel="noopener noreferrer"> townedgematerials.com/calculators/</a></p>
                </>} 
                url="https://townedgematerials.com" 
                urlText="townedgematerials.com" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}
                    
Portfolio.Monkeyshines = class Monkeyshines extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Monkeyshines Bar and Grill" 
                description={<>
                    <p>Monkeyshines wanted to just display their menu and events they have at the bar. So this project involved the setup of a 
                    GoDaddy account, installation of WordPress with a theme and plugins.</p>
                </>} 
                url="http://monkeyshinesbarandgrill.com" 
                urlText="monkeyshinesbarandgrill.com" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}
                    
Portfolio.Kinergetics = class Kinergetics extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "wordpress":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Kinergetics" 
                description={<>
                    <p>Kinergetics just wanted to have a presence on the web. The client already had a hosting service through Hostway. So this 
                    project only involved the installation of WordPress with a theme and plugins.</p>
                </>} 
                url="https://kinergetics.net" 
                urlText="kinergetics.net" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.Wsfia = class Wsfia extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "nodejs":
                    case "apache":
                    case "php7":
                    case "mysql":
                    case "gcp":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Wisconsin State Fire Inspectors Association" 
                description={<>
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
                </>} 
                url="https://wsfia.org" 
                urlText="wsfia.org" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.KinergeticsEnergyMatrix = class KinergeticsEnergyMatrix extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "javascript":
                    case "css":
                    case "apache":
                    case "php7":
                    case "mysql":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="Kinergetics' Energy Matrix" 
                description={<>
                    <p>Kinergetics wants to be able to show their customers real-time sensor data to their customers. This is a work in progress, 
                    but here’s what me and the other two people working on this project have to do.</p>

                    <p>What needs to be done is pull data from sensors using webhooks into a database. Then transform the data by calling methods, 
                    written in PHP and Vanilla JS, to return calculated data points that will then be displayed in a graph in a website/web app.</p>
                </>} 
                url="https://kinergetics.net/app" 
                urlText="kinergetics.net/app" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

Portfolio.DevFecta = class DevFecta extends Component {

    render() {

        let technologiesUsed = [];

        if (this.props.technologies) {
            
            Object.entries(this.props.technologies).forEach( (technology, index) => {
                switch(technology[0]) {
                    case "react":
                    case "css":
                    case "apache":
                    case "gcp":
                        technologiesUsed.push(technology[1])
                        break;
                    default:
                        break;
                }
                
            });

        }

        return (
            <Website 
                title="DevFecta, LLC" 
                description={<>
                    <p>DevFecta is my own website and is serving as a way for me to learn React and Google Cloud Platform. 
                    So far in addition to learning React I'm also experimenting with installing my own SSL certificates 
                    and hosting multiple websites on 1 GCP virtual machine.</p>
                </>} 
                url="https://devfecta.com" 
                urlText="devfecta.com" 
                componentClasses={this.props.classes}
                technologies={technologiesUsed}
            />
        );
    }
}

export default Portfolio;