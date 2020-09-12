import React from 'react';

import '../css/Resume.css';

const Resume = props => {

    let workExperience = "";
    let clients = "";

    const techStyle = {
        "font-size": "80%"
    }
    
    if (props.resumeData.jobs) {
        console.log('test');
        console.log(props.resumeData.jobs);
        workExperience = props.resumeData.jobs.map( (job, index) => {
            return (
                
                <div key={index} className="card col-md-6 col-sm-12 border-0">
                    <div className="card-body">
                        <h5 className="card-title">{job.jobTitle}</h5>
                        <p className="card-text">{job.startDate} - {job.endDate} <strong>{job.companyName}, {job.city}</strong></p>
                        <p className="card-text"></p>
                        <div className="row">
                            <div className="col-md">
                                <h6>Technologies Used <span className="badge badge-devfecta">{job.technologiesUsed.length}</span></h6>
                                <ul className="list-inline row justify-content-between" style={techStyle}>
                                    {
                                        job.technologiesUsed.map( (technology, index) => {
                                            return (
                                                <li key={index} className="list-inline-item col-md-5 m-1">
                                                    <a href={props.resumeData.technologies[technology].wiki} target="_blank" rel="noopener noreferrer">
                                                        {props.resumeData.technologies[technology].description}
                                                    </a>
                                                </li>
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

        clients = props.resumeData.clients.map( (client, index) => {
            return (
                <div key={index} className="col-md-6 p-2">{client.name}</div>
            );
        });
    }

    return(

        <section className="pb-2">
            <article id="resumeArticle" className="container my-1">
                <div className="card">
                    <div className="card-header">
                        <h2>Work Experience</h2>
                    </div>
                    <div className="card-body d-flex flex-wrap">
                        {workExperience}
                    </div>
                </div>
            </article>

            <article className="container my-1">
                <div className="card">
                    <div className="card-header">
                        <h2>Education</h2>
                    </div>
                    <div className="card-body d-flex flex-wrap">
                        <div className="card col-md-6 col-sm-12 border-0">
                            <div className="card-body">
                                <h5 className="card-title">Web Software Developer Associate Degree</h5>
                                <p className="card-text">January 2018 - December 2019 <strong><em>Madison College</em></strong>, Madison, WI</p>
                            </div>
                        </div>
                        <div className="card col-md-6 col-sm-12 border-0">
                            <div className="card-body">
                                <h5 className="card-title">Graphic Design Associate Degree</h5>
                                <p className="card-text">September 1995 - May 1999 <strong ><em>Madison College</em></strong>, Madison, WI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="container mt-1">
                <div className="card">
                    <div className="card-header">
                        <h2>Clients</h2>
                    </div>
                    <div className="card-body">
                        <div className="card-text row p-3">
                            {clients}
                        </div>
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