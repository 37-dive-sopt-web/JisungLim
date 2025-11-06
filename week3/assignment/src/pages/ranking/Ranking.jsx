import React, { useState, useEffect } from "react";
import * as styles from "./Ranking.css";
import Button from "../../shared/components/button/Button";
import {
  clearGameResults,
  getGameResults,
} from "../../shared/utils/storageUtils";
import { BUTTON_TYPES } from "../../shared/constants/buttonTypes";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // localStorage에서 데이터 불러오기 및 정렬
    const data = getGameResults();
    const sortedData = data.sort((a, b) => {
      if (a.level !== b.level) {
        return b.level - a.level; // 레벨 내림차순
      }
      return parseFloat(a.clearTime) - parseFloat(b.clearTime); // 클리어 시간 오름차순
    });
    setRankings(sortedData);
  }, []);

  const handleClearRecords = () => {
    if (window.confirm("모든 기록을 초기화하시겠습니까?")) {
      clearGameResults();
      setRankings([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>랭킹 보드</h2>
        <Button type={BUTTON_TYPES.RESET} onClick={handleClearRecords}>
          기록 초기화
        </Button>
      </div>

      {rankings.length === 0 ? (
        <div className={styles.noData}>아직 기록이 없습니다</div>
      ) : (
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.tableHeaderCell}>순위</th>
              <th className={styles.tableHeaderCell}>레벨</th>
              <th className={styles.tableHeaderCell}>클리어 시간(초)</th>
              <th className={styles.tableHeaderCell}>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((ranking, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.tableCell}>{index + 1}</td>
                <td className={styles.tableCell}>{ranking.level}</td>
                <td className={styles.tableCell}>{ranking.clearTime}</td>
                <td className={styles.tableCell}>{ranking.recordedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Ranking;
