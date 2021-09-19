import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Services from './components/Services';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ConfirmSubscription from './components/ConfirmSubscription';

import 'bootstrap/dist/css/bootstrap.min.css'
//import 'jquery/dist/jquery.js';
//import 'popper.js/dist/umd/popper.js';
//import 'bootstrap/dist/js/bootstrap.min.js';
//import 'bootstrap/dist/js/bootstrap.bundle.js';


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
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/services" component={Services} />
							<Route path="/resume" render={props => (<Resume {...props} resumeData={this.state.workExperience} />)} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/confirmSubscription" component={ConfirmSubscription} />
						</Switch>
					</main>
				<Footer />
			</Router>
		);
	}
}

export default App;
