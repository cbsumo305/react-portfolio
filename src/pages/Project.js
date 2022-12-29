import React from "react";
import ReactDOM from "react-dom";



const Project = props => {

    return (
        <article className="project" key={props.project.id}>

            <figure>
                <img alt={props.project.title} src={props.project.thumbnail} />
            </figure>

            <h4>{props.project.title}</h4>

            <p className="description">{props.project.description}</p>
            <p><strong>Skills:</strong> {props.project.skills.join(", ")}</p>
            <p><strong>Tools:</strong> {props.project.tools.join(", ")}</p>

            <a href={props.project.link} target="_blank">Live Page</a>
        </article>

    )
}

export default Project;
