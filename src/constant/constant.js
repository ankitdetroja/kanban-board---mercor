import homeIcon from "../assets/images/home.png";
import messageIcon from "../assets/images/message.png";
import taskIcon from "../assets/images/task.png";
import membersIcon from "../assets/images/members.png";
import settingIcon from "../assets/images/setting.png";
import dotIcon from "../assets/images/3dot.png";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import avatar4 from "../assets/images/avatar4.png";
import avatar5 from "../assets/images/avatar5.png";
import cardImg1 from "../assets/images/cardImg1.jpg";
import cardImg2 from "../assets/images/cardImg2.png";
import cardImg3 from "../assets/images/cardImg3.png";
import cardImg4 from "../assets/images/cardImg4.png";

export const projectPageList = [
  {
    pageName: "Home",
    icon: <img src={homeIcon} alt="home icon" className="icon" />,
  },
  {
    pageName: "Message",
    icon: <img src={messageIcon} alt="message icon" className="icon" />,
  },
  {
    pageName: "Tasks",
    icon: <img src={taskIcon} alt="task icon" className="icon" />,
  },
  {
    pageName: "Members",
    icon: <img src={membersIcon} alt="member icon" className="icon" />,
  },
  {
    pageName: "Settings",
    icon: <img src={settingIcon} alt="setting icon" className="icon" />,
  },
];

export const projectList = [
  {
    projectName: "Mobile App",
    icon: <img src={dotIcon} alt="dot icon" className="icon" />,
    class: "green",
  },
  {
    projectName: "Website Redesign",
    icon: <img src={dotIcon} alt="dot icon" className="icon" />,
    class: "orange",
  },
  {
    projectName: "Design System",
    icon: <img src={dotIcon} alt="dot icon" className="icon" />,
    class: "gray",
  },
  {
    projectName: "Wireframes",
    icon: <img src={dotIcon} alt="dot icon" className="icon" />,
    class: "blue",
  },
];

export const cardItems = {
  toDoCards: [
    {
      priority: "low",
      title: "Brainstorming",
      subTtile:
        "Brainstorming brings team members' diverse experience into play.",
      assignee: (
        <>
          <img src={avatar1} alt="profile avatar" className="icon" />
          <img src={avatar3} alt="profile avatar" className="icon" />
          <img src={avatar4} alt="profile avatar" className="icon" />
        </>
      ),
      comments: 12,
      files: 0,
    },
    {
      priority: "high",
      title: "Research",
      subTtile:
        "User research helps you to create an optimal product for users.",
      assignee: (
        <>
          <img src={avatar2} alt="profile avatar" className="icon" />
          <img src={avatar5} alt="profile avatar" className="icon" />
        </>
      ),
      comments: 10,
      files: 3,
    },
    {
      priority: "high",
      title: "Wireframes",
      subTtile:
        "Low fidelity wireframes include the most basic content and visuals.",
      assignee: (
        <>
          <img src={avatar1} alt="profile avatar" className="icon" />
          <img src={avatar5} alt="profile avatar" className="icon" />
          <img src={avatar3} alt="profile avatar" className="icon" />
        </>
      ),
      comments: 2,
      files: 0,
    },
  ],
  onProgress: [
    {
      priority: "low",
      title: "Onboarding Illustrations",
      cardImg: [<img src={cardImg1} alt="flowers" className="cardImg" />],
      assignee: (
        <>
          <img src={avatar3} alt="profile avatar" className="icon" />
          <img src={avatar4} alt="profile avatar" className="icon" />
          <img src={avatar1} alt="profile avatar" className="icon" />
        </>
      ),
      comments: 14,
      files: 15,
    },
    {
      priority: "low",
      title: "Moodboard",
      cardImg: [
        <img src={cardImg2} alt="planters" className="cardImg" />,
        <img src={cardImg3} alt="planters" className="cardImg" />,
      ],
      assignee: (
        <>
          <img src={avatar3} alt="profile avatar" className="icon" />
        </>
      ),
      comments: 9,
      files: 10,
    },
  ],
  done: [
    {
      priority: "completed",
      title: "Mobile App Design",
      cardImg: [<img src={cardImg4} alt="flowers" className="cardImg" />],
      assignee: (
        <>
          <img src={avatar5} alt="profile avatar" className="icon" />
          <img src={avatar4} alt="profile avatar" className="icon" />
        </>
      ),
      comments: 12,
      files: 15,
    },
    {
      priority: "completed",
      title: "Design System",
      subTitle: "It just needs to adapt the UI from what you did before",
      assignee: (
        <>
          <img src={avatar1} alt="profile avatar" className="icon" />
          <img src={avatar3} alt="profile avatar" className="icon" />
          <img src={avatar4} alt="profile avatar" className="icon" />
        </>
      ),
      comments: 12,
      files: 15,
    },
  ],
};
