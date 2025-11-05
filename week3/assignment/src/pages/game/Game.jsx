import React from "react";
import * as styles from "./Game.css";
import GameBoard from "./components/game-board/GameBoard";
import GameInfo from "./components/game-info/GameInfo";
import { useShuffle } from "./hooks/useShuffle";

const Game = () => {
  const { deck, level, gridSize, resetDeck, changeLevel } = useShuffle(1);

  return (
    <main className={styles.container}>
      <GameBoard
        deck={deck}
        gridSize={gridSize}
        resetDeck={resetDeck}
      />
      <GameInfo
        level={level}
        changeLevel={changeLevel}
      />
    </main>
  );
};

export default Game;
