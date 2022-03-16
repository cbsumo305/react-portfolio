import React, { Component } from "react";
import ReactDOM from "react-dom";

import './App.css';
import Project from "./Project.js";
import projects from "./ProjectData.js";

const aFewOfMyFavoriteThings = [`Bob's Burgers`, `The Office`, `sculpting`, `mixed media art`, `Harry Potter`, `cats (the animals, not the musical)`, `Downton Abbey`, `Mad Men`, `The Wheel of Time books`, `Game of Thrones`, `the Lightbringer series`, `The Giver`, `Poldark`, `The Great British Baking Show`, `dogs`, `food`, `Mistborn`, `Warbreaker`];

let updatedArray = [];


class App extends Component {

    shuffleLikes = () => {
        if (updatedArray.length === 0) {
            updatedArray = [...aFewOfMyFavoriteThings];
        }
        updatedArray = updatedArray.sort(() => Math.random() - .5);
        document.getElementById("topic").innerText = updatedArray[0];
        updatedArray.shift();
    }
    
    render() {
        return (
            <div className="container">
                <header>
                    <div className="content-wrapper">
                        <nav>
                            <ul>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#about">About Me</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>

                        <h1>Greetings, Earthling. <br />
                            <span>I'm Charlotte!</span></h1>
                        <p>I'm a Web Developer in Birmingham, Alabama.</p>
                        <p>Welcome to my page.</p>
                    </div>
                </header>

                <main>
                    <section id="projects">
                        <div className="content-wrapper">
                            <h2>Projects</h2>
                            <div className="project-items">
                                <Project project={projects[0]} />
                                <Project project={projects[1]} />
                                <Project project={projects[2]} />
                            </div>
                        </div>
                    </section>

                    <section id="skills">
                        <div className="content-wrapper">
                            <h2>Skills</h2>
                            <div className="skills-content">
                                <article>
                                    <h4>Developer Skills</h4>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>React.js</li>
                                        <li>SQL</li>
                                    </ul>
                                </article>

                                <article>
                                    <h4>Tech Stack</h4>
                                    <ul>
                                        <li>Visual Studio</li>
                                        <li>SSMS</li>
                                        <li>Git & GitHub</li>
                                        <li>CodeSandbox</li>
                                        <li>Photoshop</li>
                                        <li>FTP Client</li>
                                    </ul>
                                </article>
                            </div>

                        </div>
                    </section>

                    <section id="about">
                        <div className="content-wrapper">
                            <figure>
                                <img alt="my photo" src="img/my-icon.png" />
                            </figure>
                            <div className="about-me-blurb">
                                <h2>
                                    Charlotte Soumeillan <br />
                                    <span>[<b>shahr</b>-luht suh-<b>mil</b>-yuhn]</span>
                                </h2>
                                <p>I stumbled upon coding sort of by accident at an old job. I was looking for ways to automate tasks and save time, and that's when I discovered macros! I knew then that I wanted to be a web developer.</p>

                                <p>I've been building aesthetically-pleasing, high-functioning websites ever since!</p>

                                <p>When I'm not writing awesome code, you can find me crafting weird stuff or hanging out with the husband + pets.</p>
                            </div>

                            <article>
                                <p>Introverted but willing to discuss</p>
                                <p id="topic" onClick={this.shuffleLikes}>building a killer website, just for you. <br />
                                    Click to see what else!</p>
                            </article>

                        </div>
                    </section>

                </main>
                <footer id="contact">
                    <div className="content-wrapper">
                        <h3>Let's Connect</h3>

                        <div className="footer-content">
                        <div className="message-me-container">
                            <h4>Message me</h4>
                            <div className="message-me">
                                <address>
                                    <a href="mailto:cbsumo305@gmail.com">cbsumo305@gmail.com</a>
                                </address>
                                </div>
                            </div>
                            <div className="social-icons-container">
                                <h4>Follow me</h4>
                                <div className="social-icons">
                                    <p><a href="https://www.linkedin.com/in/charlotte-soumeillan-b84401223/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></p>
                                    <p><a href="https://github.com/cbsumo305" target="_blank"><i className="fa-brands fa-github"></i></a></p>
                                </div>
                            </div>
                            

                            

                        </div>
                        <div className="copyright">
                            Copyright 2022 | <span className="heart">&hearts;</span> Charlotte Soumeillan
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default App;
