import React, { Component } from 'react';

import '../css/Service.css';

class Service extends Component {

    render() {

        const development = 
            <svg xmlns="https://www.w3.org/2000/svg" className="float-end m-3" id="devlopment" x="0px" y="0px" width="100px" height="83.703px"
                    viewBox="0 0 100 83.703" preserveAspectRatio="xMidYMid meet">
            
                    <g id="groupMonitor">
                    <g id="monitor">
                        <polygon id="baseMonitor" points="57.037,66.667 65.926,74.074 65.926,79.26 31.852,79.26 31.852,74.074 
                            40.741,66.667"/>
                        <g id="bodyMonitor">
                            <path d="M7.444,66.667c-1.65,0-3-1.35-3-3V3c0-1.65,1.35-3,3-3h82.889c1.65,0,3,1.35,3,3v60.667
                                c0,1.65-1.35,3-3,3H7.444z"/>
                        </g>
                        <rect id="screenMonitor" x="10" y="5.926" width="77.777" height="46.666"/>
                        <circle id="buttonMonitor" cx="48.889" cy="60" r="3.333"/>
                    </g>
                    <g id="contentMonitor">
                        <g id="contentLowerMonitor"> 
                            <rect x="38.519" y="17.777" width="45.926" height="2.963"/>
                            <rect x="38.519" y="23.704" width="45.926" height="2.963"/>
                            <rect x="38.519" y="29.63" width="22.222" height="2.963"/>
                            <rect x="38.519" y="35.556" width="22.222" height="2.963"/>
                            <rect x="38.519" y="41.481" width="22.222" height="2.963"/>
                            <rect x="38.519" y="47.407" width="22.222" height="2.963"/>
                        </g>
                        <polygon id="contentMiddleMonitor" points="35.926,50.37 23.704,50.37 23.704,41.481 12.963,41.481 
                            12.963,17.777 35.926,17.777"/>
                        <rect id="contentUpperMonitor" x="12.963" y="8.148" width="71.853" height="7.407"/>
                    </g>
                </g>
                <g id="groupTablet">
                    <g id="tablet">
                        <g id="bodyTablet">
                            <path d="M100,81.703c0,1.1-0.9,2-2,2H64.223c-1.1,0-2-0.9-2-2V32.37c0-1.1,0.9-2,2-2H98c1.1,0,2,0.9,2,2V81.703
                                z"/>
                        </g>
                        <rect id="screenTablet" x="64.814" y="34.074" width="32.594" height="42.963"/>
                        <circle id="buttonTablet" cx="81.111" cy="80.37" r="1.852"/>
                    </g>
                    <g id="contentTablet">
                        <g id="contentLowerTablet"> 
                            <rect x="66.297" y="62.222" width="29.629" height="2.223"/>
                            <rect x="66.297" y="65.926" width="29.629" height="2.223"/>
                            <rect x="66.297" y="69.63" width="29.629" height="2.222"/>
                            <rect x="66.297" y="73.333" width="29.629" height="2.223"/>
                        </g>
                        <rect id="contentMiddleTablet" x="66.297" y="45.185" width="29.629" height="14.815"/>
                        <g id="contentUpperTablet">
                            <rect x="66.297" y="35.556" width="29.629" height="7.407"/>
                            <rect x="90.371" y="37.407" width="4.443" height="0.741"/>
                            <rect x="90.371" y="38.889" width="4.443" height="0.741"/>
                            <rect x="90.371" y="40.37" width="4.443" height="0.741"/>
                        </g>
                    </g>
                </g>
                <g id="groupPhone">
                    <g id="phone">
                        <g id="bodyPhone">
                            <path d="M22.222,81.703c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2v-36.74c0-1.1,0.9-2,2-2h18.222c1.1,0,2,0.9,2,2
                                V81.703z"/>
                        </g>
                        <rect id="screenPhone" x="1.852" y="48.889" width="18.519" height="27.407"/>
                        <circle id="buttonPhone" cx="11.111" cy="79.999" r="1.852"/>
                        <rect id="speakerPhone" x="7.407" y="45.185" width="7.408" height="1.482"/>
                    </g>
                    <g id="contentPhone">
                        <g id="contentLowerPhone">
                            <rect x="2.963" y="68.148" width="16.296" height="1.481"/>
                            <rect x="2.963" y="71.11" width="16.296" height="1.481"/>
                            <rect x="2.963" y="74.074" width="16.296" height="1.481"/>
                        </g>
                        <rect id="contentMiddlePhone" x="2.963" y="55.926" width="16.296" height="11.111"/>
                        <g id="contentUpperPhone">
                            <rect x="2.963" y="49.629" width="16.296" height="5.186"/>
                            <rect x="15.555" y="51.11" width="2.963" height="2.223"/>
                        </g>
                    </g>
                </g>
            
            </svg>
        ;

        const design = 
            <svg xmlns="https://www.w3.org/2000/svg" className="float-end m-3" id="consulting" x="0px" y="0px" width="100px" height="83.703px"
                viewBox="0 0 100 83.703" preserveAspectRatio="xMidYMid meet">

                <g id="groupMonitor">
                    <g id="monitor">
                        <polygon id="baseMonitor" points="57.037,66.667 65.926,74.074 65.926,79.26 31.852,79.26 31.852,74.074 
                            40.741,66.667"/>
                        <g id="bodyMonitor">
                            <path d="M7.444,66.667c-1.65,0-3-1.35-3-3V3c0-1.65,1.35-3,3-3h82.889c1.65,0,3,1.35,3,3v60.667
                                c0,1.65-1.35,3-3,3H7.444z"/>
                        </g>
                        <rect id="screenMonitor" x="10" y="5.926" width="77.777" height="46.666"/>
                        <circle id="buttonMonitor" cx="48.889" cy="60" r="3.333"/>
                    </g>
                    <g id="contentMonitor">
                        <g className="contentMonitor"> 
                            <rect x="38.519" y="17.777" width="45.926" height="2.963" />
                            <rect x="38.519" y="23.704" width="45.926" height="2.963" />
                            <rect x="38.519" y="29.63" width="45.926" height="2.963" />
                            <rect x="38.519" y="35.556" width="45.926" height="2.963" />
                            <rect x="38.519" y="41.481" width="45.926" height="2.963" />
                            <rect x="38.519" y="47.407" width="45.926" height="2.963" />
                        </g>

                        <rect className="contentMonitor" x="12.963" y="17.777" width="22.987" height="32.576"/>

                        <rect className="contentMonitor" x="12.963" y="8.148" width="71.853" height="7.407"/>
                    </g>



                    <g id="drawing">
                    
                        <rect id="screenMask" x="10" y="5.926" width="77.777" height="46.666" />
                    
                        <g id="brush" transform="translate(-37,13)">
                            <path id="brushBristle" fill="#0000ff" d="m 45.881281,37.536151 c 0,0 4.493467,-0.637205 4.398137,-3.257105 -1.470827,-3.291709 1.831516,-4.616861 4.175282,-3.24958 6.175087,5.04573 -5.59757,9.337295 -8.573419,6.506685 z" />
                            <path id="brushHandle" fill="#000000" d="m 54.2,30.1 c 0,0 1.77837,0.888172 2.4,2.5 L 70.875778,14.617896 c 1.554199,-1.957706 0.193193,-2.804636 -1.612289,-1.049033 z" />
                        </g>
                    </g>
                </g>

            </svg>
        ;

        const consulting = 
            <svg xmlns="https://www.w3.org/2000/svg" className="float-end m-3" id="consulting" x="0px" y="0px" width="54.546px" height="100px"
                viewBox="0 0 54.546 100" preserveAspectRatio="xMidYMid meet">


                <g id="phone-group">
                    <path id="phone" d="M54.546,97.244c0,1.516-1.24,2.756-2.756,2.756H2.756C1.24,100,0,98.76,0,97.244V2.756
                        C0,1.24,1.24,0,2.756,0h49.035c1.516,0,2.756,1.24,2.756,2.756V97.244z"/>
                    <rect id="screen" x="4.545" y="14.545" width="45.457" height="67.273"/>
                    <rect id="speaker" x="18.182" y="5.454" width="18.183" height="3.637"/>
                    <path id="home-button" d="M31.82,90.909c0,2.511-2.035,4.546-4.547,4.546c-2.51,0-4.545-2.035-4.545-4.546
                        c0-2.508,2.034-4.546,4.545-4.546C29.785,86.363,31.82,88.401,31.82,90.909z"/>
                </g>
                <path id="answer" d="M33.453,54.527H20.7c-7.894,0-14.293,4.086-14.293,9.124v0.591
                    c0,2.673,1.801,5.077,4.671,6.746c0,0,0.195,4.081-4.671,5.783c6.934,0,10.615-3.711,10.615-3.711
                    c1.174,0.199,2.406,0.305,3.679,0.305h12.751c7.893,0,14.293-4.085,14.293-9.123V63.65C47.746,58.613,41.345,54.527,33.453,54.527
                    z M39.576,68.11H14.97v-2.56h24.606V68.11z M39.576,62.205H14.97v-2.56h24.606V62.205z"/>
                <path id="question" d="M47.746,40.62V27.824c0-5.039-6.4-9.124-14.293-9.124H20.7
                    c-7.894,0-14.293,4.085-14.293,9.124V40.62c0,5.039,6.399,9.124,14.293,9.124h12.752c1.271,0,2.504-0.106,3.678-0.305
                    c0,0,3.682,3.711,10.615,3.711c-4.867-1.702-4.67-5.783-4.67-5.783C45.945,45.697,47.746,43.293,47.746,40.62z M39.576,44.095
                    H14.97v-2.559h24.606V44.095z M39.576,38.189H14.97V35.63h24.606V38.189z M39.576,32.283H14.97v-2.559h24.606V32.283z
                    M39.576,26.378H14.97v-2.559h24.606V26.378z"/>

            </svg>
        ;

        let serviceIcon = "";

        switch (this.props.title) {
            case "Design":
                serviceIcon = design;
                break;

            case "Consulting":
                serviceIcon = consulting;
                break;
        
            default:
                serviceIcon = development;
                break;
        }

        return (
            <div className="card serviceCard m-2">
                <div className="card-body">
                {serviceIcon}
                    <h3 className="card-title text-devfecta">{this.props.title}</h3>
                    <p className="card-text">{this.props.description}</p>
                    
                    
                    
                </div>
            </div>
        );
    }
}

export default Service;