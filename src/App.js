import React, { Component }  from 'react';

import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';

import './css/App.css';



class App extends Component {
	render() {

		return (
			<div>
				<Header />

				<main>

					<section id="serviceSection">
						<div id="serviceImage" className="w-100"></div>
						
						<div id="serviceIntro" className="container text-light d-flex align-items-center">
								<p>DevFecta is a web development, design, and consulting company based in Madison, Wisconsin that offers professional 
									website design, web development, and graphic design services. In addition, I also offer consulting services for 
									when you just need a little help with a current web project.</p>
						</div>

						<Services />
					</section>

					<section id="portfolioSection">
						<div className="container d-flex justify-content-center">
							<button className="btn btn-primary">View My Resume</button>
						</div>
					</section>

					

				</main>


				<Footer />
			</div>
		);
	}
}

export default App;
