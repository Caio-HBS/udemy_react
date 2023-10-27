import React, { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function selectSquareHandler() {
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player isActive={activePlayer === "X"} initialName="Player 1" symbol="X" />
          <Player isActive={activePlayer === "O"} initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard onSquareSelect={selectSquareHandler} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  );
}
