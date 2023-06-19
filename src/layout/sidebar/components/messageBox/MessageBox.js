import React from "react";
import lampIcon from "../../../../assets/images/lamp.png";
import "./messageBox.scss";

const MessageBox = () => {
  return (
    <div className="message-box">
      <p className="message-header">Thoughts Time</p>
      <p className="message-subHeader">
        We don’t have any notice for you, till then you can share your thoughts
        with your peers.
      </p>
      <button>Write a message</button>
      <div className="lamp-box flex flex-ai-c flex-jc-c">
        <img src={lampIcon} alt="lamp icon" className="icon"></img>
      </div>
    </div>
  );
};

export default MessageBox;
