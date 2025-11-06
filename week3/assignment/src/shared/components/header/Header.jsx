import React from "react";
import * as styles from "./Header.css";
import Button, { BUTTON_TYPES } from "../button/Button";

const Header = ({ onSelectPage }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>숫자 카드 짝 맞추기</h1>
      <div className={styles.buttonContainer}>
        <Button type={BUTTON_TYPES.GAME} onClick={() => onSelectPage("Game")}>
          게임
        </Button>
        <Button type={BUTTON_TYPES.RANKING} onClick={() => onSelectPage("Ranking")}>
          랭킹
        </Button>
      </div>
    </header>
  );
};

export default Header;
