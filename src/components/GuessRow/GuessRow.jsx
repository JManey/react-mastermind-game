import React from "react";
import GuessPegs from "../GuessPegs/GuessPegs";
import GuessScore from "../GuessScore/GuessScore";

const GuessRow = props => (
  <div className="component guess-row-container">
    <div>GuessRow #</div>
    <GuessPegs />
    <GuessScore />
  </div>
);

export default GuessRow;
