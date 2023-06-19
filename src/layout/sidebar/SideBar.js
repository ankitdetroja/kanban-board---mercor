import React from "react";
import sidebarHeaderLogo from "../../assets/images/sidebar-header.png";
import sidebarinsideIcon from "../../assets/images/insideIcon.png";
import PageList from "./components/pages/PageList";
import Projects from "./components/projects";
import "./sidebar.scss";
import MessageBox from "./components/messageBox/MessageBox";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="header flex flex-ai-c flex-jc-sb">
        <div className="project-header flex flex-ai-c">
          <img
            src={sidebarHeaderLogo}
            alt="project logo"
            className="project-logo icon"
          ></img>
          <span className="project-name">Project M.</span>
        </div>
        <img
          src={sidebarinsideIcon}
          alt="collaps button"
          className="collapse-button"
        ></img>
      </div>
      <PageList />
      <Projects />
      <MessageBox />
    </div>
  );
}

export default SideBar;
