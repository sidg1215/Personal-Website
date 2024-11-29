import React from "react";
import projects from './data/projects.json';

export const Projects = () => {
    return (
        <>
            <div style={{}} class="d-flex flex-column justify-content-center align-items-center">
                <h1 class="display-3">Projects</h1>
                <p class="lead">Personal and academic</p>
            </div>
            <div class="d-flex flex-column justify-content-around align-items-center">
                {projects.map((project => {
                    return (
                        <div class="card w-75 bg-light mt-2">
                            <div class="d-flex flex-row justify-content-between pl-2">
                                <div class="card-body lead">
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <h5 class="card-title">
                                            {project.name}
                                        </h5>
                                    </a>
                                    <h6>Used: {project.technologies}</h6>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                }))}
            </div>


        </>
    );
}