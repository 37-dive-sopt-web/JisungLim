import React from "react";
import * as styles from "./Game.css";
import GameBoard from "./components/game-board/GameBoard";
import GameInfo from "./components/game-info/GameInfo";
import Modal from "../../shared/components/modal/modal";
import { useShuffle } from "./hooks/useShuffle";
import { useGameLogic } from "./hooks/useGameLogic";
import { GAME_RESULT } from "./constants/GameConstants";

const Game = () => {
  const { deck, level, gridSize, timeLimit, resetDeck, changeLevel } = useShuffle(1);
  const {
    flippedCards,
    matchedCards,
    isGameStarted,
    timeLeft,
    matchedCardsCount,
    totalPairs,
    history,
    gameResult,
    gameMessage,
    handleCardClick,
    handleReset,
  } = useGameLogic(deck, resetDeck, level, timeLimit);

  const isModalOpen = gameResult === GAME_RESULT.WIN || gameResult === GAME_RESULT.LOSE;
  const modalTitle = gameResult === GAME_RESULT.WIN ? "게임 클리어!" : "시간 종료!";
  const modalMessage =
    gameResult === GAME_RESULT.WIN
      ? `축하합니다! ${(timeLimit - timeLeft).toFixed(2)}초 만에 클리어했습니다!`
      : "시간이 초과되었습니다. 다시 도전해보세요!";

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
        gameMessage={gameMessage}
      />
      {/* 게임 종료 시 Modal 표시 */}
      <Modal
        isOpen={isModalOpen}
        title={modalTitle}
        message={modalMessage}
        onClose={handleReset}
      />
    </main>
  );
};

export default Game;
