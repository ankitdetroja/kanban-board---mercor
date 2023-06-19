import React from "react";

import "./board.scss";
import BoardHeader from "./components/BoardHeader";
import BoardFilters from "./components/BoardFilters";
import BoardCards from "./components/BoardCards";

const Board = () => {
  return (
    <div className="board">
      <BoardHeader />
      <BoardFilters />
      <BoardCards />
    </div>
  );
};

export default Board;
