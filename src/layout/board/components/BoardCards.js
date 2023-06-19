import React from "react";
import "./boardCards.scss";
import addIcon from "../../../assets/images/addSquare.png";
import dotIcon from "../../../assets/images/3dot.png";
import messageIcon from "../../../assets/images/message.png";
import folderIcon from "../../../assets/images/folder.png";
import { cardItems } from "../../../constant/constant";

const BoardCards = () => {
  return (
    <div className="board-sections flex flex-jc-sb">
      <div className="board-sectionItem">
        <div className="board-sectionItem-header borderBlue flex flex-ai-c flex-jc-sb">
          <p className="flex flex-ai-c">
            <span className="colorIcon blue"></span>
            To Do
            <span className="count">3</span>
          </p>
          <img src={addIcon} alt="add icon" className="icon" />
        </div>
        <div className="board-sectionItem-cards">
          {cardItems.toDoCards.map((card) => {
            return (
              <div className="cardItem" key={card.title}>
                <div className="cardItem-header flex flex-ai-c flex-jc-sb">
                  <span className={`priorityBadge ${card.priority}`}>
                    {card.priority}
                  </span>
                  <img src={dotIcon} alt="edit icon" className="icon" />
                </div>
                <div className="cardItem-content">
                  <h1>{card.title}</h1>
                  <h2>{card.subTtile}</h2>
                </div>
                <div className="cardItem-footer flex flex-ai-c flex-jc-sb">
                  <div className="assignees">{card.assignee}</div>
                  <div className="flex flex-ai-c">
                    <div className="comments flex flex-ai-c">
                      <img
                        src={messageIcon}
                        alt="message icon"
                        className="icon"
                      />
                      <p>{card.comments} commets</p>
                    </div>
                    <div className="fileCount flex flex-ai-c">
                      <img
                        src={folderIcon}
                        alt="message icon"
                        className="icon"
                      />
                      <p>{card.files} files</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="board-sectionItem">
        <div className="board-sectionItem-header borderYellow flex flex-ai-c">
          <p className="flex flex-ai-c">
            <span className="colorIcon yello"></span>
            On Progress
            <span className="count">4</span>
          </p>
        </div>
        <div className="board-sectionItem-cards">
          {cardItems.onProgress.map((card) => {
            return (
              <div className="cardItem" key={card.title}>
                <div className="cardItem-header flex flex-ai-c flex-jc-sb">
                  <span className={`priorityBadge ${card.priority}`}>
                    {card.priority}
                  </span>
                  <img src={dotIcon} alt="edit icon" className="icon" />
                </div>
                <div className="cardItem-content">
                  <h1>{card.title}</h1>
                  <h2>{card.subTitle}</h2>
                </div>
                <div
                  className={
                    card.cardImg.length === 2
                      ? " cardItem-imgs flex flex-jc-sb two"
                      : "cardItem-imgs"
                  }
                >
                  {card.cardImg.map((img) => img)}
                </div>
                <div className="cardItem-footer flex flex-ai-c flex-jc-sb">
                  <div className="assignees">{card.assignee}</div>
                  <div className="flex flex-ai-c">
                    <div className="comments flex flex-ai-c">
                      <img
                        src={messageIcon}
                        alt="message icon"
                        className="icon"
                      />
                      <p>{card.comments} commets</p>
                    </div>
                    <div className="fileCount flex flex-ai-c">
                      <img
                        src={folderIcon}
                        alt="message icon"
                        className="icon"
                      />
                      <p>{card.files} files</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="board-sectionItem">
        <div className="board-sectionItem-header borderGreen flex flex-ai-c">
          <p className="flex flex-ai-c">
            <span className="colorIcon green"></span>
            Done
            <span className="count">4</span>
          </p>
        </div>
        <div className="board-sectionItem-cards">
          {cardItems.done.map((card) => {
            return (
              <div className="cardItem" key={card.title}>
                <div className="cardItem-header flex flex-ai-c flex-jc-sb">
                  <span className={`priorityBadge ${card.priority}`}>
                    {card.priority}
                  </span>
                  <img src={dotIcon} alt="edit icon" className="icon" />
                </div>
                <div className="cardItem-content">
                  <h1>{card.title}</h1>
                  <h2>{card.subTitle}</h2>
                </div>
                <div className="cardItem-imgs">{card.cardImg}</div>
                <div className="cardItem-footer flex flex-ai-c flex-jc-sb">
                  <div className="assignees">{card.assignee}</div>
                  <div className="flex flex-ai-c">
                    <div className="comments flex flex-ai-c">
                      <img
                        src={messageIcon}
                        alt="message icon"
                        className="icon"
                      />
                      <p>{card.comments} commets</p>
                    </div>
                    <div className="fileCount flex flex-ai-c">
                      <img
                        src={folderIcon}
                        alt="message icon"
                        className="icon"
                      />
                      <p>{card.files} files</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardCards;
