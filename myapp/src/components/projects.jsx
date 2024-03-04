import React from 'react';
import {ProjectsData} from '../Data/projects';

// Design this..
function ProjectCard(props) {
    return (
        <div className = "projects-main">
            <p><b><em>Project Name : </em></b>{props.name}</p>
            <p><b><em>Description : </em></b>{props.desc}</p>
            <p><b><em>Tech stack Used : </em></b>{props.tech}</p>
            <p><b><em>Github link : </em></b><a href={props.link} target="_blank" rel="noreferrer">LINK</a></p>
        </div>
    );
}

function Projects() {
    return (
        <div id = "projects" className ="projects-section">
            <div className="projects-section-head">
                <div className="pro-first-div"><h1>Projects</h1></div>
            </div>
            <ProjectCard 
            name = {ProjectsData[0].name}
            desc = {ProjectsData[0].desc}
            tech = {ProjectsData[0].techUsed}
            link = {ProjectsData[0].link}
            />
            <ProjectCard 
            name = {ProjectsData[1].name}
            desc = {ProjectsData[1].desc}
            tech = {ProjectsData[1].techUsed}
            link = {ProjectsData[1].link}
            />
        </div>
    );
}

export { Projects };