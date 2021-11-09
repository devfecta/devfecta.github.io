import React, { Component } from 'react';

import DevFectaLogo from "./DevFectaLogo";

import '../css/ConfirmSubscription.css';

class ConfirmSubscription extends Component {

    render() {

        return (

            <div className="container-fluid vh-100 bg-devfecta">
            
                <section className="row h-50 d-flex justify-content-center align-items-center">
            
                    <div className="col-md-6 text-white text-center">
                    
                        <DevFectaLogo logoColor="#fff" logoHeight="200" logoWidth="200" />
                        
                        <p className="fs-1 my-3">Thank you for being a part of the DevFecta team.</p>
                    
                    </div>
                
                </section>
            
            </div>

        );
    }
}

export default ConfirmSubscription;