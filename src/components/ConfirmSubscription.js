import React, { Component } from 'react';

import '../css/ConfirmSubscription.css';

class ConfirmSubscription extends Component {

    render() {

        const backgroundShape = {
            fill: "#003153",
            fillRule: "evenodd"
        };

        return (
            <div className="container-fluid h-100">
                <section className="row d-flex justify-content-middle ">

                    <svg xmlns="https://www.w3.org/2000/svg" id="servicesSVG" viewBox="0 0 100 500" preserveAspectRatio="none">
                        <polygon points="0,0 100,0 100,350 50,500 0,350" style={backgroundShape} />
                    </svg>

                    <article id="servicesIntro" className="text-light text-center">
                        <p className="container">Thank you for being a part of the DevFecta team.</p>
                    </article>
                        
                </section>

            </div>
        );
    }
}

export default ConfirmSubscription;