import React, { Component } from 'react';

import '../css/Resume.css';

const Resume = props => {

    let resume = "";

    if (props.resumeData.jobs) {
        console.log('test');
        console.log(props.resumeData.jobs);
        resume = props.resumeData.jobs.map( (job, index) => {
            return (
                
                <div key={index} className="card col-md-6 col-sm-12 border-0">
                    <div className="card-body">
                        <h5 className="card-title">{job.jobTitle}</h5>
                        <p className="card-text">{job.startDate} - {job.endDate} <strong>{job.companyName}, {job.city}</strong></p>
                        <p className="card-text"></p>
                        <div className="row">
                            <div className="col-md">
                                <h6>Technologies Used <span className="badge badge-devfecta">{job.technologiesUsed.length}</span></h6>
                                <ul className="list-inline row justify-content-between">
                                    {
                                        job.technologiesUsed.map( (technology, index) => {
                                            return (
                                                <li key={index} className="list-inline-item col-md-5 m-1">{technology}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                );
        });

        console.log(resume);
    }

    return(

        <section>
            <article id="resumeArticle"  className="container">
                <div className="card m-2">
                    <div className="card-header">
                        <h2>Work Experience</h2>
                    </div>
                    <div className="card-body d-flex flex-wrap">

                    {resume}

                    </div>
                </div>
            </article>
        </section>
    );
    
}

/*
const Resume = props => {

    if (props) {
        console.log(props.resumeData.jobs);
    }
    
    
    props.resumeData.jobs.map( job => {
        console.log('test');
    });

    let resume = () => props.resumeData.jobs.map( job => {

        return (
            <div className="card col-md-6 col-sm-12 border-0">
                <div className="card-body">
                    <h5 className="card-title">{job.jobTitle}</h5>
                    <p className="card-text">{job.startDate} - {job.endDate} <strong>{job.companyName}, {job.city}</strong></p>
                    <p className="card-text"></p>
                    <div className="row">
                        <div className="col-md">
                            <h6>Technologies Used <span class="badge badge-devfecta">{job.technologiesUsed.length}</span></h6>
                            <ul className="list-inline row justify-content-between">
                                {
                                    
                                    props.resumeData.jobs.technologiesUsed.map( technology => {
                                        //console.log(this.props.technologies.technology)
                                        return (
                                            <li className="list-inline-item col-md-5 m-1">{props.resumeData.technologies.technology}</li>
                                        )
                                    })
                                    
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    console.log(resume);
    

    return(<h1>test</h1>);
    
    
    
}
*/
/*
class Resume extends Component {

    constructor(props) {
        super();
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount')
        //console.log(this.state.workExperience);
        console.log(this.props);
        if (this.props.resumeData.length > 0) {
            this.props.resumeData.jobs.map( job => {
                console.log('test');
            });
        }
    }

    render() {
        
       // console.log(this.state.workExperience);
        
        const resumeSection = {
            marginTop: "-5em"
        }
        console.log('render');
        console.log();

        return (
            
            <section>
                {console.log('return')}
                <article>
                    <div className="card">
                        <div className="card-header">
                            <h2>Work Experience</h2>
                        </div>
                        <div className="card-body d-flex flex-wrap">

                        

                            
                        </div>
                    </div>
                </article>
            </section>
        );
    }
}
*/
export default Resume;