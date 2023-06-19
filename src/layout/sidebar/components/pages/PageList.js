import React from "react";
import { projectPageList } from "../../../../../src/constant/constant";
import "./pageList.scss";

const PageList = () => {
  return (
    <div className="page-list">
      <ul>
        {projectPageList.map((page) => {
          return (
            <li className="flex flex-ai-c" key={page.pageName}>
              {page.icon}
              <p>{page.pageName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageList;
