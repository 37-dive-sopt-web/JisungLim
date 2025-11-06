import React from "react";
import * as styles from "./Ranking.css";
import Button from "../../shared/components/button/Button";

const Ranking = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>랭킹 보드</h2>
        <Button type="reset" onClick={handleClearRecords}>
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
              <tr key={ranking.id} className={styles.tableRow}>
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
