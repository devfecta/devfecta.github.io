import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import ContactThankYou from './components/ContactThankYou';

import Services from './components/Services';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolios from './components/Portfolios';
import ConfirmSubscription from './components/ConfirmSubscription';
import TermsWebsiteCarePlan from './components/TermsWebsiteCarePlan';

import 'bootstrap/dist/css/bootstrap.min.css';

import './css/App.css';
import Portfolio from './components/portfolio/Portfolio';

class App extends Component {

	constructor() {
        super();
        this.state = {
			workExperience : []
		};
    }
 	
	componentDidMount() {
		//console.log('App componentDidMount');
		fetch('./resumeData.json')
		.then(response => response.json())
		.then(result => {
			//const experiences = result.map(experience => experience);
			this.setState({
					workExperience : result
				}
			)
		});
	}

	render() {

		return (

			<Router basename="/">
				<Header />
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/services" render={props => (<Services {...props} title={"Services - " + document.title} />)} />
							<Route path="/resume" render={props => (<Resume {...props} resumeData={this.state.workExperience} title={"Resume - " + document.title} />)} />
							<Route exact path="/portfolio" render={props => (<Portfolios {...props} resumeData={this.state.workExperience} title={"Portfolio - " + document.title} />)} />
							<Route path="/confirmSubscription" component={ConfirmSubscription} />
							<Route path="/termsWebsiteCarePlan" render={props => (<TermsWebsiteCarePlan {...props} title={"Terms and Conditions - " + document.title} />)} />
							<Route path="/contact-thank-you" component={ContactThankYou} />

							<Route path="/portfolio/prosource" render={props => (<Portfolio.Prosource {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/first-response-well" render={props => (<Portfolio.FirstRespondWell {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/first-due-construction" render={props => (<Portfolio.FirstDueConstruction {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/metal-decor-studios" render={props => (<Portfolio.MetalDecorStudios {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/alts-operation" render={props => (<Portfolio.AltsOperation {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/scrtac" render={props => (<Portfolio.Scrtac {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/scwiherc" render={props => (<Portfolio.Scwiherc {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/townedge" render={props => (<Portfolio.Townedge {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/monkeyshines" render={props => (<Portfolio.Monkeyshines {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/kinergetics" render={props => (<Portfolio.Kinergetics {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/wsfia" render={props => (<Portfolio.Wsfia {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/kinergetics-energy-matrix" render={props => (<Portfolio.KinergeticsEnergyMatrix {...props} technologies={this.state.workExperience.technologies} />)} />
							<Route path="/portfolio/devfecta" render={props => (<Portfolio.DevFecta {...props} technologies={this.state.workExperience.technologies} />)} />
							
							
												
						</Switch>
					</main>
				
				<Footer />
			</Router>
		);
	}
}

export default App;
