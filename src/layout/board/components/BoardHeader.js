import React from "react";
import editIcon from "../../../assets/images/edit.png";
import linkIcon from "../../../assets/images/link.png";
import addIcon from "../../../assets/images/addSquare.png";
import avatar1 from "../../../assets/images/avatar1.png";
import avatar2 from "../../../assets/images/avatar2.png";
import avatar3 from "../../../assets/images/avatar3.png";
import avatar4 from "../../../assets/images/avatar4.png";
import avatarNumber from "../../../assets/images/avatarNumber.png";
import "./boardHeader.scss";

const BoardHeader = () => {
  return (
    <div className="board-header flex flex-ai-c flex-jc-sb">
      <div className="header-content flex flex-ai-c">
        <h1>Mobile App</h1>
        <div>
          <img src={editIcon} alt="" className="icon" />
          <img src={linkIcon} alt="" className="icon" />
        </div>
      </div>
      <div className="users-content flex flex-ai-c">
        <a href="/" className="flex flex-ai-c">
          <img src={addIcon} alt="" className="icon" />
          invite
        </a>
        <img src={avatar1} alt="avatar" className="avatar doNotSlide" />
        <img src={avatar2} alt="avatar" className="avatar" />
        <img src={avatar3} alt="avatar" className="avatar" />
        <img src={avatar4} alt="avatar" className="avatar" />
        <img src={avatarNumber} alt="avatar" className="avatar" />
        <p className="userCount">+2</p>
      </div>
    </div>
  );
};

export default BoardHeader;
