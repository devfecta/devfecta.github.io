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

							<Route path="/portfolio/prosource" component={Portfolio.Prosource} />
							<Route path="/portfolio/first-response-well" component={Portfolio.FirstRespondWell} />
							<Route path="/portfolio/first-due-construction" component={Portfolio.FirstDueConstruction} />
							<Route path="/portfolio/metal-decor-studios" component={Portfolio.MetalDecorStudios} />
							<Route path="/portfolio/alts-operation" component={Portfolio.AltsOperation} />
							<Route path="/portfolio/scrtac" component={Portfolio.SCRTAC} />
							<Route path="/portfolio/scwiherc" component={Portfolio.SCWIHERC} />
							<Route path="/portfolio/townedge" component={Portfolio.Townedge} />
							<Route path="/portfolio/monkeyshines" component={Portfolio.Monkeyshines} />
							<Route path="/portfolio/kinergetics" component={Portfolio.Kinergetics} />
												
						</Switch>
					</main>
				
				<Footer />
			</Router>
		);
	}
}

export default App;
