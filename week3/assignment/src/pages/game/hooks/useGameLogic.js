import { useState, useEffect, useRef } from "react";
import {
  TIMER_INTERVAL,
  CARD_FLIP_DELAY,
  GAME_RESET_DELAY,
  MAX_FLIPPED_CARDS,
  GAME_RESULT,
  GAME_MESSAGES,
  WARNING_MESSAGE_TIME,
} from "../constants/GameConstants";
import { saveGameResult } from "../../../shared/utils/storageUtils";

export const useGameLogic = (deck, resetDeck, level, timeLimit) => {
  // 카드 상태
  const [flippedCards, setFlippedCards] = useState([]); // 현재 뒤집힌 카드 정보 저장(최대 2장), [{ id: "3-a", value: 3}, ...]
  const [matchedCards, setMatchedCards] = useState([]); // 이미 매치된 카드의 ID만 저장, ["1-a", "1-b", ...]

  // 게임 상태
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [matchedCardsCount, setMatchedCardsCount] = useState(0); // 현재까지 매치된 카드 쌍의 개수
  const [history, setHistory] = useState([]); // { cards: [value1, value2], isMatch: boolean }

  const [gameResult, setGameResult] = useState(GAME_RESULT.NOT_STARTED);
  const isComparing = useRef(false);
  const totalPairs = deck.length / 2;

  const [warningMessage, setWarningMessage] = useState("");

  // 레벨 변경 시 timeLeft 초기화
  useEffect(() => {
    setTimeLeft(timeLimit);
    setFlippedCards([]);
    setMatchedCards([]);
    setIsGameStarted(false);
    setMatchedCardsCount(0);
    setHistory([]);
    setGameResult(GAME_RESULT.NOT_STARTED);
    isComparing.current = false;
  }, [timeLimit]);

  // 타이머
  useEffect(() => {
    // 게임 진행 중일 때만 타이머 동작
    if (gameResult !== GAME_RESULT.IN_PROGRESS) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          setGameResult(GAME_RESULT.LOSE);
          return 0;
        }
        return prev - 0.1;
      });
    }, TIMER_INTERVAL);

    return () => clearInterval(timer);
  }, [gameResult]);

  // 승리 체크
  useEffect(() => {
    if (matchedCardsCount === totalPairs) {
      setGameResult(GAME_RESULT.WIN);
    }
  }, [matchedCardsCount, totalPairs]);

  // 게임 종료 시 3초 후 초기화
  useEffect(() => {
    if (gameResult === GAME_RESULT.WIN || gameResult === GAME_RESULT.LOSE) {
      // WIN일 때만 localStorage에 저장
      if (gameResult === GAME_RESULT.WIN) {
        const result = {
          level: `Level ${level}`,
          clearTime: (timeLimit - timeLeft).toFixed(2),
          recordedAt: new Date().toLocaleString('ko-KR'),
        };
        saveGameResult(result);
      }

      const timeout = setTimeout(() => {
        handleReset();
      }, GAME_RESET_DELAY);
      return () => clearTimeout(timeout);
    }
  }, [gameResult, level, timeLeft]);

  // 게임 상태에 따른 메시지 가져오기
  const getGameMessage = () => {
    if (gameResult === GAME_RESULT.WIN) return GAME_MESSAGES.WIN;
    if (gameResult === GAME_RESULT.LOSE) return GAME_MESSAGES.LOSE;
    if (gameResult === GAME_RESULT.IN_PROGRESS)
      return GAME_MESSAGES.IN_PROGRESS;
    return GAME_MESSAGES.NOT_STARTED;
  };

  // 카드 클릭 핸들러
  const handleCardClick = (card) => {
    if (gameResult === GAME_RESULT.WIN || gameResult === GAME_RESULT.LOSE)
      return; // 게임 종료 상태 체크
    if (flippedCards.find((c) => c.id === card.id)) {
      setWarningMessage(GAME_MESSAGES.ALREADY_FLIPPED);
      setTimeout(() => {
        setWarningMessage("");
      }, WARNING_MESSAGE_TIME);
      return; // 이미 뒤집힌 카드 체크
    }
    if (matchedCards.includes(card.id)) return; // 이미 매치된 카드 체크
    if (isComparing.current) return; // 카드 비교 중 체크
    if (flippedCards.length >= MAX_FLIPPED_CARDS) return; // 2장 이미 뒤집힌 상태 체크

    // 게임 시작 전이면 클릭한 순간부터 게임 시작
    if (!isGameStarted) {
      setIsGameStarted(true);
      setGameResult(GAME_RESULT.IN_PROGRESS);
    }

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    // 두 장째 카드 뒤집었을 때
    if (newFlipped.length === MAX_FLIPPED_CARDS) {
      isComparing.current = true; // 다른 카드 클릭 시 handleCardClick 이벤트 return
      const [first, second] = newFlipped;

      // 매치 확인
      if (first.value === second.value) {
        // 매치 성공
        setMatchedCards((prev) => [...prev, first.id, second.id]);
        setMatchedCardsCount((prev) => prev + 1);
        setHistory((prev) => [
          { cards: [first.value, second.value], isMatch: true }, // 새롭게 추가된 카드를 history 배열 앞에 추가
          ...prev,
        ]);
        setFlippedCards([]);
        isComparing.current = false; // 다른 카드 클릭 무시 해제
      } else {
        // 매치 실패 시 일정 시간 후 뒤집기
        setTimeout(() => {
          setHistory((prev) => [
            { cards: [first.value, second.value], isMatch: false },
            ...prev,
          ]);
          setFlippedCards([]);
          isComparing.current = false; // 700ms동안은 다른 카드 클릭 시에도 이벤트 발생 X, 700ms 후 해제
        }, CARD_FLIP_DELAY);
      }
    }
  };

  // 게임 리셋
  const handleReset = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setIsGameStarted(false);
    setTimeLeft(timeLimit);
    setMatchedCardsCount(0);
    setHistory([]);
    setGameResult(GAME_RESULT.NOT_STARTED);
    isComparing.current = false;
    resetDeck();
  };

  const gameMessage = warningMessage || getGameMessage();

  return {
    flippedCards,
    matchedCards,
    isGameStarted,
    timeLeft,
    matchedCardsCount,
    totalPairs,
    history,
    gameResult,
    gameMessage,
    handleCardClick,
    handleReset,
  };
};
