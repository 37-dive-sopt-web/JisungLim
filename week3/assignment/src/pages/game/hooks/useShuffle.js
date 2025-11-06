import { useState } from "react";
import { LEVEL_CONFIG, DEFAULT_LEVEL } from "../../../shared/constants/levelConfig";

/**
 * Fisher–Yates 셔플 함수
 */
function shuffle(array, rng = Math.random) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * 레벨별 덱을 만들어주는 함수
 */
function buildDeck(level = DEFAULT_LEVEL) {
  const config = LEVEL_CONFIG[level] || LEVEL_CONFIG[DEFAULT_LEVEL];
  const { rows, cols, pairs } = config;
  const total = rows * cols;

  // 카드 총 개수는 짝수
  if (total % 2 !== 0) throw new Error("카드 개수는 짝수여야 해요.");

  const base = Array.from({ length: pairs }, (_, i) => i + 1);

  // 각 숫자 값을 2장씩 생성하고, 고유 id를 부여
  const duplicated = [];
  for (let i = 0; i < base.length; i += 1) {
    const v = base[i];
    duplicated.push({ id: `${v}-a`, value: v });
    duplicated.push({ id: `${v}-b`, value: v });
  }

  // 매 게임마다 다른 배치를 위해 마지막에 셔플
  return shuffle(duplicated);
}

export const useShuffle = (initialLevel = DEFAULT_LEVEL) => {
  const [level, setLevel] = useState(initialLevel);
  const [deck, setDeck] = useState(() => buildDeck(initialLevel));

  // 그리드 크기 계산
  const config = LEVEL_CONFIG[level] || LEVEL_CONFIG[DEFAULT_LEVEL];
  const gridSize = { rows: config.rows, cols: config.cols };

  // 덱 리셋 (새로운 셔플)
  const resetDeck = () => {
    setDeck(buildDeck(level));
  };

  // 레벨 변경
  const changeLevel = (newLevel) => {
    setLevel(newLevel);
    setDeck(buildDeck(newLevel));
  };

  return {
    deck,
    level,
    gridSize,
    timeLimit: config.timeLimit,
    resetDeck,
    changeLevel,
  };
};
