import React, { Component } from 'react';

class Artwork extends Component {

    render() {

        return (
            <div className="card serviceCard m-2">
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Artwork;