import React from "react";
import * as styles from "./Game.css";
import GameBoard from "./game-board/GameBoard";
import GameInfo from "./game-info/GameInfo";

const Game = () => {
  return (
    <main className={styles.container}>
      <GameBoard gridSize={4} />
      <GameInfo />
    </main>
  );
};

export default Game;
