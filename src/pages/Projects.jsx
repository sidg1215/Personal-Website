import React from "react";
import projects from './data/projects.json';

export const Projects = () => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
            </head>


            <div style={{}} class="d-flex flex-column justify-content-center align-items-center">
                <h1 class="display-3">Projects</h1>
                <p class="lead">In my free time, I like to try and learn and make new things. Here are some of them:</p>
            </div>
            <div class="card-deck">
                {ProjectCard(projects[0])}
                {ProjectCard(projects[1])}
                {ProjectCard(projects[2])}
            </div>
            <div class="card-deck">
                {ProjectCard(projects[3], "hidden")}
                {ProjectCard(projects[3])}
                {ProjectCard(projects[3], "hidden")}
            </div>


        </>
    );
}

function ProjectCard(project, hide="show") {
    return (
        <div class="card bg-light ml-5 mr-5 mb-2" style={{ visibility: hide }}>
            <a href={project?.link} target="_blank" rel="noreferrer">
                <img class="card-img-top " src={project.imageLink}></img>
            </a>
            <h5 class="card-title ml-1">
                {project.name}
            </h5>
            <p class="lead ml-1">
                {project.description}
            </p>
            <div class="card-footer lead">Technologies used: {project.technologies}</div>
        </div>
    );
}
