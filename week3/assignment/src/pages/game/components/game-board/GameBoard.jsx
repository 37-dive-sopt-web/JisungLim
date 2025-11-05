import React from 'react'
import * as styles from './GameBoard.css'

const GameBoard = ({ deck, gridSize, resetDeck }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>게임 보드</h2>
        <button type="button" className={styles.resetButton} onClick={resetDeck}>
          게임 리셋
        </button>
      </div>

      <div
        className={styles.boardGrid}
        style={{ gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)` }}
      >
        {deck.map((card) => (
          <div key={card.id} className={styles.card}>
            ?
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameBoard
