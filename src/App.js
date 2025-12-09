import { Component }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import ContactThankYou from './components/ContactThankYou';

import Services from './components/Services';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolios from './components/Portfolios';
import ConfirmSubscription from './components/ConfirmSubscription';
import TermsWebsiteCarePlan from './components/TermsWebsiteCarePlan';


import Portfolio from './components/portfolio/Portfolio';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

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
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/services" element={<Services title={"Services - " + document.title} />} />
							<Route path="/resume" element={<Resume resumeData={this.state.workExperience} title={"Resume - " + document.title} />} />
							<Route path="/portfolio" element={<Portfolios resumeData={this.state.workExperience} title={"Portfolio - " + document.title} />} />
							<Route path="/confirmSubscription" Component={ConfirmSubscription} />
							<Route path="/termsWebsiteCarePlan" element={<TermsWebsiteCarePlan title={"Terms and Conditions - " + document.title} />} />
							<Route path="/contact-thank-you" Component={ContactThankYou} />

							<Route path="/portfolio/prosource" element={<Portfolio.Prosource technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/first-response-well" element={<Portfolio.FirstRespondWell technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/first-due-construction" element={<Portfolio.FirstDueConstruction technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/metal-decor-studios" element={<Portfolio.MetalDecorStudios technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/alts-operation" element={<Portfolio.AltsOperation technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/scrtac" element={<Portfolio.Scrtac technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/scwiherc" element={<Portfolio.Scwiherc technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/townedge" element={<Portfolio.Townedge technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/monkeyshines" element={<Portfolio.Monkeyshines technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/kinergetics" element={<Portfolio.Kinergetics technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/wsfia" element={<Portfolio.Wsfia technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/kinergetics-energy-matrix" element={<Portfolio.KinergeticsEnergyMatrix technologies={this.state.workExperience.technologies} />} />
							<Route path="/portfolio/devfecta" element={<Portfolio.DevFecta technologies={this.state.workExperience.technologies} />} />				
						</Routes>
					</main>
				
				<Footer />
			</Router>
		);
	}
}

export default App;
