import React, { Component } from 'react';


class Website extends Component {

    componentDidMount() {
        document.title = this.props.title + " - " + document.title;
    }

    render() {

        let technologiesUsed = "";

        if (this.props.technologies) {
            
            technologiesUsed = this.props.technologies.map( (technology, index) => {

                return (
                    <li key={index} className="list-group-item border-0 bg-transparent">
                        <a href={technology.wiki} target="_blank" rel="noopener noreferrer">
                            {technology.description}
                        </a>
                    </li>
                )
            })
        }

        let classes = (this.props.componentClasses) ? this.props.componentClasses : "col-md vh-100";

        return (
            <article className={"portfolio-article p-5 " + classes}>
                <picture>
                    <source srcSet={(this.props.url) ? "//image.thum.io/get/" + this.props.url : ""} media="(min-width: 1080px)" type="image/png" />
                    <img src="./images/Devfecta.png" className="portfolio-img col-md-3 float-end m-3 img-fluid" width="auto" height="auto" alt={this.props.title} loading="lazy" style={{"boxShadow": "2px 2px 5px rgba(0, 0, 0, 0.5)"}} />
                </picture>
                
                <h2>{this.props.title}</h2>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.urlText}</a>
                {this.props.description}

                <p className="h5">Technologies Used</p>
                <ul className="list-group bg-transparent">
                    {technologiesUsed}
                </ul>
            </article>
        );
    }
}

export default Website;