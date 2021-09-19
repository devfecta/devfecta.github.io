import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Subscription.css';

class Subscription extends Component {

    render() {

        return (
            <div className="card m-2">
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p className="card-subtitle h5 mb-3">{this.props.subTitle}</p>
                    {this.props.description}
                    <p className="card-text fs-4 mb-3">{this.props.pricing}</p>
                    <a href={this.props.link} className="btn btn-primary">Order {this.props.title}</a>
                </div>
            </div>
        );
    }
}

export default Subscription;