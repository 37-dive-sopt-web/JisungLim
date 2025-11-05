import React from 'react'
import * as styles from './Header.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>숫자 카드 짝 맞추기</h1>
      <div className={styles.buttonContainer}>
        <button type="button" className={styles.button({ type: 'game' })}>게임</button>
        <button type="button" className={styles.button({ type: 'ranking' })}>랭킹</button>
      </div>
    </header>
  )
}

export default Header
