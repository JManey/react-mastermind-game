import React from "react";
import GuessRow from "../GuessRow/GuessRow";

const GameBoard = props => (
  <div className="component game-board">
    <div>GameBoard</div>
    {props.guesses.map((guess, idx) => (
      <GuessRow
        guess={guess}
        colors={props.colors}
        rowIdx={idx}
        key={idx}
        currentGuess={idx === props.guesses.length - 1}
      />
    ))}
  </div>
);

export default GameBoard;
