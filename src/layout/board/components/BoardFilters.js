import React from "react";
import filterIcon from "../../../assets/images/filter.png";
import downArrowIcon from "../../../assets/images/vectorGray.png";
import calendarIcon from "../../../assets/images/calendar8.png";
import membersIcon from "../../../assets/images/members.png";
import pauseIcon from "../../../assets/images/pause.png";
import menuIcon from "../../../assets/images/menu.png";
import "./boardFilters.scss";

const BoardFilters = () => {
  return (
    <div className="board-filters flex flex-jc-sb">
      <div className="flex flex-ai-c">
        <button className="filter-button button flex flex-ai-c">
          <img src={filterIcon} alt="" className="icon" />
          Filter
          <img src={downArrowIcon} alt="" className="icon" />
        </button>
        <button className="filter-button button flex flex-ai-c">
          <img src={calendarIcon} alt="" className="icon" />
          Today
          <img src={downArrowIcon} alt="" className="icon" />
        </button>
      </div>
      <div className="flex flex-ai-c">
        <div className="filter-right-content flex flex-ai-c">
          <button className="share-button button flex flex-ai-c">
            <img src={membersIcon} alt="" className="icon" />
            Share
          </button>
        </div>
        <div className="filter-icons flex flex-ai-c">
          <img src={pauseIcon} alt="pause icon" className="icon" />
          <img src={menuIcon} alt="menu icon" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default BoardFilters;
