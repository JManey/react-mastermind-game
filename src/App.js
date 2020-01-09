import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer/Footer";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";

const colors = ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD"];

class App extends Component {
  constructor() {
    //always call super first or 'this' will not work
    super();
    //state is object for holding data
    this.state = {
      selColorIdx: 0,
      //calls getNewGuess to create an empty guess object
      guesses: [this.getNewGuess()],
      code: this.genCode()
    };
  }

  getNewGuess = () => {
    return {
      //TODO change to null after testing
      code: [3, 2, 1, 0],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  };

  genCode = () =>
    new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuessIdx = this.state.guesses.length - 1;
    return this.state.guesses[lastGuessIdx].score.perfect === 4
      ? lastGuessIdx + 1
      : 0;
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div>
        <button
          onClick={() =>
            this.setState(state => {
              return { selColorIdx: ++state.selColorIdx % 4 };
            })
          }
        >
          Next Color
        </button>
        Selected color: {colors[this.state.selColorIdx]}
        <div className="App app-board">
          <header className="App-header">React Mastermind</header>
          <div className="game-board-container">
            <GameBoard colors={colors} guesses={this.state.guesses} />
          </div>
          <div className="right-side-container">
            <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx} />
            <GameTimer />
            <NewGameButton />
          </div>
          <footer>
            {winTries ? `You Won in ${winTries} Guesses!` : "Good Luck!"}
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
