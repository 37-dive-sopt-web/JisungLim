import React from 'react'
import * as styles from './Header.css'
import Button from '../button/Button'

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>숫자 카드 짝 맞추기</h1>
      <div className={styles.buttonContainer}>
        <Button type="game">게임</Button>
        <Button type="ranking">랭킹</Button>
      </div>
    </header>
  )
}

export default Header
