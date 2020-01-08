import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Footer from "./components/Footer/Footer";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";

class App extends Component {
  render() {
    return (
      <div className="App app-board">
        <header className="App-header">React Mastermind</header>
        <div className="game-board-container">
          <GameBoard />
        </div>
        <div className="right-side-container">
          <ColorPicker />
          <GameTimer />
          <NewGameButton />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
