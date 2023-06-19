import React from "react";
import addIcon from "../../../../assets/images/add.png";
import "./projects.scss";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <div className="project">
      <div className="project-header flex flex-ai-c flex-jc-sb">
        <p>my projects</p>
        <img src={addIcon} alt="add icon" className="icon" />
      </div>
      <ProjectList />
    </div>
  );
};

export default Projects;
