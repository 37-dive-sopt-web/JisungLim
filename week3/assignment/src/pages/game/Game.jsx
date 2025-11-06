import React from "react";
import * as styles from "./Game.css";
import GameBoard from "./components/game-board/GameBoard";
import GameInfo from "./components/game-info/GameInfo";
import { useShuffle } from "./hooks/useShuffle";
import { useGameLogic } from "./hooks/useGameLogic";

const Game = () => {
  const { deck, level, gridSize, resetDeck, changeLevel } = useShuffle(1);
  const {
    flippedCards,
    matchedCards,
    isGameStarted,
    timeLeft,
    matchedCardsCount,
    totalPairs,
    history,
    gameResult,
    handleCardClick,
    handleReset,
  } = useGameLogic(deck, resetDeck);

  return (
    <main className={styles.container}>
      <GameBoard
        deck={deck}
        gridSize={gridSize}
        resetDeck={handleReset}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        onCardClick={handleCardClick}
      />
      <GameInfo
        level={level}
        changeLevel={changeLevel}
        isGameStarted={isGameStarted}
        timeLeft={timeLeft}
        matchedCardsCount={matchedCardsCount}
        totalPairs={totalPairs}
        history={history}
        gameResult={gameResult}
      />
    </main>
  );
};

export default Game;
