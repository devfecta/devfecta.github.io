import React, { Component } from 'react';
import Website from './Website';

const Portfolio = ({item}) => item;

Portfolio.Prosource = class Prosource extends Component {

    render() {
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
            />
        );
    }
}

Portfolio.FirstRespondWell = class FirstRespondWell extends Component {

    render() {
        return (
            <Website 
                title="First, Respond Well" 
                description={<>
                    <p>First, Respond Well is a Wordpress project that involves the setup of hosting and email service on Bluehost.</p>
                </>} 
                url="https://firstrespondwell.org" 
                urlText="firstrespondwell.org" 
                componentClasses={this.props.classes}
            />            
        );
    }
}

Portfolio.FirstDueConstruction = class FirstDueConstruction extends Component {

    render() {
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
            />
        );
    }
}

Portfolio.MetalDecorStudios = class MetalDecorStudios extends Component {

    render() {
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
            />
        );
    }
}

Portfolio.AltsOperation = class AltsOperation extends Component {

    render() {
        return (
            <Website 
                title="Alt's Operation" 
                description={<>
                    <p>Alt's Operation is a WordPress project that involved the setup of a hosting and email service on GoDaddy.</p>
                </>} 
                url="https://altsoperation.com" 
                urlText="altsoperation.com" 
                componentClasses={this.props.classes}
            />
        );
    }
}

Portfolio.SCRTAC = class SCRTAC extends Component {

    render() {
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
            />
        );
    }
}

Portfolio.SCWIHERC = class SCWIHERC extends Component {

    render() {
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
            />
        );
    }
}

Portfolio.Townedge = class Townedge extends Component {

    render() {
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
            />
        );
    }
}
                    
Portfolio.Monkeyshines = class Monkeyshines extends Component {

    render() {
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
            />
        );
    }
}
                    
Portfolio.Kinergetics = class Kinergetics extends Component {

    render() {
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
            />
        );
    }
}

export default Portfolio;