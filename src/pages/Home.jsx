import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
    return (
        <div class="container">
            <div class="d-flex flex-row">
                <div class="d-flex flex-column justify-content-center align-items-center col align-self-center">
                    <h1 class="display-1">Siddharth</h1>
                    <h1 class="display-1">Gupta</h1>
                    <TypeAnimation
                        repeat={Infinity}
                        sequence={["Software Engineer", 1000, "Student", 1000, "Hobbyist", 1000]}
                    />
                    <p><b>Currently, I am looking for full-time roles starting May 2024.</b></p>
                    <p><b><a href="https://github.com/sidg1215" target="_blank" rel="noreferrer">GitHub</a>|<a href="https://www.linkedin.com/in/sidgupta-1234/" target="_blank" rel="noreferrer">Linkedin</a></b></p>
                    <p><b>Phone: 603-546-8865</b></p>
                    <p><b>Email: <a href="/">gupta.siddh@northeastern.edu</a></b></p>
                </div>
                <div class="d-flex flex-column justify-content-around align-self-center">
                    <div class="card bg-light mt-2">
                        <div class="card-body lead">
                            <h5 class="card-title">
                                Who am I?
                            </h5>
                            <p>I am a fourth-year CS student at <b>Northeastern University</b>.</p>
                        </div>
                    </div>
                    <div class="card bg-light mt-2">
                        <div class="card-body lead">
                            <h5 class="card-title">
                                Professional Interests
                            </h5>
                            <ul>
                                <li>
                                    AI/ML
                                </li>
                                <li>
                                    Natural Language Processing
                                </li>
                                <li>
                                    Full-stack development
                                </li>
                                <li>
                                    Programming Languages
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card bg-light mt-2">
                        <div class="card-body lead">
                            <h5 class="card-title">
                                Interests
                            </h5>
                            <ul>
                                <li>
                                    Soccer, Tennis, Bouldering
                                </li>
                                <li>
                                    Reading (Michael Lewis is my favorite author)
                                </li>
                                <li>
                                    Cooking (Getting better one meal at a time!)
                                </li>
                                <li>
                                    Movies
                                </li>
                                <li>
                                    Touch typing/keyboard shortcuts
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card bg-light mt-2">
                        <div class="card-body lead">
                            <h5 class="card-title">
                                Skills
                            </h5>
                            <ul>
                                <li>
                                    Languages: Python, Java, Typescript, C, Verilog, SQL
                                </li>
                                <li>
                                    Frameworks: ReactJS, ReactTS
                                </li>
                                <li>
                                    Tools: Docker, Git, AWS, Netlify, Jupyter
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};