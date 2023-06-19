import React from "react";
import { projectList } from "../../../../../src/constant/constant";
import "./projectList.scss";

const ProjectList = () => {
  return (
    <div className="project-list">
      <ul>
        {projectList.map((project, idx) => {
          return (
            <li
              className={
                idx === 0
                  ? "active flex flex-ai-c flex-jc-sb"
                  : "flex flex-ai-c flex-jc-sb"
              }
              key={project.projectName}
            >
              <div className="project-name flex flex-ai-c">
                <span className={project.class}></span>
                <p>{project.projectName}</p>
              </div>
              {project.icon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
