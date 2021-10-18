import React, { Component } from 'react';


class Website extends Component {

    render() {

        let classes = (this.props.componentClasses) ? this.props.componentClasses : "col-md vh-100";

        return (
            <article className={"portfolio-article p-5 " + classes}>
                <picture>
                    <source srcSet={(this.props.url) ? "//image.thum.io/get/" + this.props.url : ""} media="(min-width: 1080px)" type="image/png" />
                    <img src="./images/DevFecta.png" className="col-md-3 float-end m-3 img-fluid" width="auto" height="auto" alt={this.props.title} loading="lazy" />
                </picture>
                
                <h2>{this.props.title}</h2>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.urlText}</a>
                {this.props.description}
            </article>
        );
    }
}

export default Website;