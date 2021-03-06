import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Services from './components/Services';
import Resume from './components/Resume'
import Footer from './components/Footer';

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
							<Route exact path="/" component={Services} />
							<Route path="/resume" render={props => (<Resume {...props} resumeData={this.state.workExperience} />)} />
						</Switch>
					</main>
				<Footer />
			</Router>
		);
	}
}

export default App;
