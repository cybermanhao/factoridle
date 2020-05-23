import React from "react";
import logo from "./logo.svg";
import "./App.css";
import game from "./game/game.js";
import Counter from "./game/counter.js";

function App() {
  console.log(game);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {game.data.gameTime}
          <code>src/App.js</code> and save to reload.
        </p>
        <Counter count={0} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
