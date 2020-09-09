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


        fetch('./resumeData.json')
        .then(response => response.json())
        .then(result => {

			const experiences = result.map(experience => experience);
			
			this.setState({
					workExperience : experiences
				}
			)
			
		});
		
		
	}
	
	render() {

		return (
			<Router>
				<Header />
					<Switch>
						<Route exact path="/" component={Services} />
						<Route path="/resume" resumeData={this.state.workExperience} component={Resume} />
					</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
