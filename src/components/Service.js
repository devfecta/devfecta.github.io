import React, { Component } from 'react';

class Service extends Component {

    render() {

        return (
            <div className="card serviceCard">
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Service;