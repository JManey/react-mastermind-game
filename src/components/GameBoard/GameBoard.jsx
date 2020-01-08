import React from "react";
import GuessRow from "../GuessRow/GuessRow";

const GameBoard = props => (
  <div className="component game-board">
    <div>GameBoard</div>
    <GuessRow />
    <GuessRow />
  </div>
);

export default GameBoard;
