import React from "react";
import * as styles from "./GameInfo.css";
import { LEVEL_CONFIG } from "../../../../shared/constants/levelConfig";

const GameInfo = ({
  level,
  changeLevel,
  isGameStarted,
  timeLeft,
  matchedCardsCount,
  totalPairs,
  history,
  gameResult,
  gameMessage,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.infoCategoryText}>
        레벨
        <select
          id="level"
          value={level}
          onChange={(e) => changeLevel(Number(e.target.value))}
          disabled={isGameStarted && !gameResult}
          className={styles.levelInput}
        >
          {Object.entries(LEVEL_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
      </label>

      <div className={styles.gameStateBoxContainer}>
        <div className={styles.gameStateBox}>
          <span className={styles.gameStateTypeText}>남은 시간</span>
          <span className={styles.gameStateValue}>{timeLeft.toFixed(2)}</span>
        </div>
        <div className={styles.gameStateBox}>
          <span className={styles.gameStateTypeText}>성공한 짝</span>
          <span className={styles.gameStateValue}>
            {matchedCardsCount}/{totalPairs}
          </span>
        </div>
        <div className={styles.gameStateBox}>
          <span className={styles.gameStateTypeText}>남은 짝</span>
          <span className={styles.gameStateValue}>
            {totalPairs - matchedCardsCount}
          </span>
        </div>
      </div>

      <p className={styles.infoCategoryText}>안내 메시지</p>
      <div className={styles.warningMessageBox}>{gameMessage}</div>

      <p className={styles.infoCategoryText}>최근 히스토리</p>
      <div className={styles.historyContainer}>
        {history.length === 0 ? (
          <p className={styles.noHistoryText}>아직 뒤집힌 카드가 없어요</p>
        ) : (
          history.map((item, index) => (
            <div key={index} className={styles.historyBox}>
              <span className={styles.historyCardId}>
                {item.cards[0]}, {item.cards[1]}
              </span>
              <span
                className={`${styles.historyResultText} ${
                  item.isMatch ? styles.success : styles.fail
                }`}
              >
                {item.isMatch ? "성공" : "실패"}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameInfo;
