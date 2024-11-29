import React from "react";

export const Home = () => {
    return (
        <div class="container">
            <div style={{flexWrap: 'wrap'}} class="d-flex flex-row justify-content-between">
                <div class="d-flex flex-column justify-content-center align-items-center col align-self-center">
                    <h1 class="display-1">Siddharth</h1>
                    <h1 class="display-1">Gupta</h1>
                    <center><b>Software Engineer 1 at Babel Street</b></center>
                    <p><b><a href="https://github.com/sidg1215" target="_blank" rel="noreferrer">GitHub</a>|<a href="https://www.linkedin.com/in/sidgupta-1234/" target="_blank" rel="noreferrer">Linkedin</a></b></p>
                    <p><b>Phone: 603-546-8865</b></p>
                    <p><b>Email: <a href="/">siddharthgupta555t@gmail.com</a></b></p>
                </div>
                <div class="d-flex flex-column justify-content-around align-self-center">
                    <div class="card bg-light mt-2">
                        <div class="card-body lead">
                            <h5 class="card-title">
                                Professional Interests
                            </h5>
                            <ul>
                                <li>
                                    AI, ML, and NLP
                                </li>
                                <li>
                                    Programming Languages
                                </li>
                                <li>
                                    Backend engineering
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
                                    Soccer, Tennis, Running, and Lifting
                                </li>
                                <li>
                                    Reading (Michael Lewis is my favorite author)
                                </li>
                                <li>
                                    Movies
                                </li>
                                <li>
                                    Touch typing and keyboard shortcuts
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
                                    Python, Java, Typescript, C, OCaml, Docker
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};