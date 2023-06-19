import React from "react";
import searchIcon from "../../assets/images/search.png";
import calendarIcon from "../../assets/images/calendar.png";
import questionIcon from "../../assets/images/messageq.png";
import notificationIcon from "../../assets/images/notification.png";
import userProfile from "../../assets/images/userProfile.png";
import downArrowIcon from "../../assets/images/vector.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar flex flex-ai-c flex-jc-sb">
      <div className="navbar-searchBar">
        <img src={searchIcon} alt="search icon" className="icon" />
        <input type="search" placeholder="Search for anything..." />
      </div>
      <div className="navbar-right flex flex-aic flex-jc-sb">
        <div className="navbar-icons flex flex-jc-sb flex-ai-c">
          <img src={calendarIcon} alt="calendar icon" className="icon" />
          <img src={questionIcon} alt="question icon" className="icon" />
          <img
            src={notificationIcon}
            alt="notification icon"
            className="icon"
          />
        </div>
        <div className="navbar-userProfile flex flex-ai-c">
          <div className="userData">
            <p className="userName">Anima Agarval</p>
            <p className="userAddress">U.P, India</p>
          </div>
          <img src={userProfile} alt="user profile" className="userAvatar" />
          <img
            src={downArrowIcon}
            alt="down arrow"
            className="downArrowIcon"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
