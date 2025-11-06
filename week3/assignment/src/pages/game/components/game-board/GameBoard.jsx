import React from 'react'
import * as styles from './GameBoard.css'
import Button from '../../../../shared/components/button/Button';
import { BUTTON_TYPES } from '../../../../shared/constants/buttonTypes';

const GameBoard = ({
  deck,
  gridSize,
  resetDeck,
  flippedCards,
  matchedCards,
  onCardClick,
}) => {
  const isCardFlipped = (card) => {
    return (
      flippedCards.find((c) => c.id === card.id) ||
      matchedCards.includes(card.id)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>게임 보드</h2>
        <Button type={BUTTON_TYPES.RESET} onClick={resetDeck}>게임 리셋</Button>
      </div>

      <div
        className={styles.boardGrid}
        style={{ gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)` }}
      >
        {deck.map((card) => {
          const isFlipped = isCardFlipped(card);
          const isMatched = matchedCards.includes(card.id);

          return (
            <div
              key={card.id}
              className={styles.card({ matched: isMatched })}
              onClick={() => onCardClick(card)}
            >
              {isFlipped ? card.value : '?'}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default GameBoard
