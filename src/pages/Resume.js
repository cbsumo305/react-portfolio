import React, { Component } from "react";
import ReactDOM from "react-dom";

import '../App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Resume extends Component {

    render() {
        return (

            <div id="resume">
                <div className="header-row flex-row">
                    <div className="flex-row name-block reveal">

                        <div className="icon-block">
                            <figure>
                                <img src="/img/white-icon-face.png" />
                            </figure>
                        </div>

                        <div>
                            <h1 className="mint">Charlotte Soumeillan</h1>
                            <h2>Web Developer</h2>
                        </div>

                    </div>

                    <div className="flex-col contact-block reveal">

                        <div className="flex-row">
                            <p className="mint"><i className="fa-solid fa-mobile-alt"></i></p>
                            <p>251.623.3416</p>
                        </div>
                        <div className="flex-row">
                            <p className="mint"><i className="fa-solid fa-envelope-open-text"></i></p>
                            <p>cbsumo305@gmail.com</p>
                        </div>
                        <div className="flex-row">
                            <p className="mint"><i className="fa-solid fa-map-marker-alt"></i></p>
                            <p>Alabaster, AL</p>
                        </div>
                    </div>

                </div>


                <div className="bio-row flex-row">
                    <div className="flex-col bio-block">
                        <h3 className="mint reveal">Biography</h3>
                        <p className="reveal">
                            Web Developer specializing in highly functional web applications and creative problem-solving.
                        </p>
                        <p className="reveal">
                            Currently freelancing and crafting my way to financial freedom.
                        </p>

                        <div className="flex-row reveal">
                            <a href="http://www.charlottesweb.us/">charlottesweb.us</a>
                            <a href="http://www.blackdiamondpromo.com/" target="_blank">blackdiamondpromo.com</a>
                            <a href="https://www.linkedin.com/in/cbsumo/" target="_blank"><i className="fa-brands fa-linkedin-in"></i> cbsumo</a>
                            <a href="https://github.com/cbsumo305" target="_blank"><i className="fa-brands fa-github"></i> cbsumo305</a>
                        </div>
                    </div>

                    <div className="flex-col project-block">
                        <h3 className="mint reveal">Projects</h3>

                        <div>
                            <div className="featured-project reveal">
                                <p><a href="http://www.blackdiamondpromo.com/" target="_blank">Black Diamond Promotions:</a></p>
                                <p>Landing page for my freelancing business with my husband!</p>
                                <p><b>Tools used - </b>JavaScript, HTML, CSS, GitHub, Visual Studio</p>
                            </div>

                            <div className="featured-project reveal">
                                <p><a href="https://stmsupply.com/" target="_blank">STM Landscape Supply:</a></p>
                                <p>In-progress website for freelance client.</p>
                                <p><b>Tools used - </b> WordPress, PHP, JavaScript</p>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="skills-and-exp-row flex-row">
                    <div className="blue-block flex-col reveal">

                        <div className="skill-block">
                            <h3 className="mint reveal">Skills &amp; Tech Savvy</h3>
                            <ul className="flex-row reveal">
                                <li>HTML5/CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Flexbox</li>
                                <li>APIs</li>
                                <li>SQL</li>
                                <li>VB.NET</li>
                                <li>WordPress</li>
                                <li>Git/GitHub</li>
                                <li>CodeSandbox</li>
                                <li>SSMS</li>
                                <li>Visual Studio</li>
                                <li>Photoshop</li>
                                <li>Google/MS Suite</li>
                            </ul>

                        </div>

                        <div className="edu-block">
                            <h3 className="mint reveal">Education</h3>
                            <p className="reveal">
                                <b>Skillcrush</b><br />
                                Front End Developer Track, 2022
                            </p>


                        </div>



                    </div>

                    <div className="flex-col exp-block reveal">
                        <h3 className="mint reveal">Work Experience</h3>

                        <div className="flex-row job-block reveal">
                            <div className="date-col">
                                Jan. 2021 <br />
                                -<br />
                                Dec. 2021
                            </div>
                            <div className="job-col">
                                <h4>Production Manager</h4>
                                <h5>Cajun Creations | Monroeville, AL</h5>

                                <ul>
                                    <li>Collaborated with management to streamline production software for 6 departments.</li>
                                    <li>Automated quote generation process, saving up to 15 hours weekly.</li>
                                    <li>Trained new hires to operate 8 production machines and the associated software for each.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-row job-block reveal">
                            <div className="date-col">
                                June 2015<br />
                                -<br />
                                Dec. 2020
                            </div>
                            <div className="job-col">
                                <h4>Website Manager</h4>
                                <h5>Payne Environmental Services | Mobile, AL</h5>
                                <ul>
                                    <li>
                                        Built and maintained SQL-driven .NET website utilized by 200+ users, including the following:
                                        <ul>
                                            <li>Operator training portal</li>
                                            <li>Document management system</li>
                                            <li>Management of change program</li>
                                            <li>Public awareness surveys & response analysis</li>
                                        </ul>
                                    </li>
                                    <li>Facilitated training for website setup and training to 10+ organizations.</li>
                                    <li>Provided help-desk assistance to over 100 users for web services.</li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex-row job-block reveal">
                            <div className="date-col">
                                Sept. 2013<br />
                                -<br />
                                May 2015
                            </div>
                            <div className="job-col">
                                <h4>Administrative Assistant</h4>
                                <h5>Payne Environmental Services | Mobile, AL</h5>
                                <ul>
                                    <li>Managed daily operations and enhanced workflow for 4 departments.</li>
                                    <li>Oversaw invoicing and monitored budgets of up to 20 projects monthly.</li>
                                    <li>Built MS Access database for client training purposes and was promoted to Website Manager.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        );
    }
}
export default Resume;