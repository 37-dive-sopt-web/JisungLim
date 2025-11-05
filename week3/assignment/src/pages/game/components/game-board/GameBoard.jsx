import React from 'react'
import * as styles from './GameBoard.css'

const GameBoard = ({ gridSize = 4 }) => {
  // gridSize x gridSize 만큼의 카드 생성
  const totalCards = gridSize * gridSize;
  const cards = Array.from({ length: totalCards }, (_, index) => index);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>게임 보드</h2>
        <button type="button" className={styles.resetButton}>게임 리셋</button>
      </div>

      <div
        className={styles.boardGrid}
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {cards.map((index) => (
          <div key={index} className={styles.card}>
            ?
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameBoard
