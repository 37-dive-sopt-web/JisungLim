import { useState, useEffect, useRef } from "react";

export const useGameLogic = (deck, resetDeck) => {
  // 카드 상태
  const [flippedCards, setFlippedCards] = useState([]); // 현재 뒤집힌 카드 정보 저장(최대 2장), [{ id: "3-a", value: 3}, ...]
  const [matchedCards, setMatchedCards] = useState([]); // 이미 매치된 카드의 ID만 저장, ["1-a", "1-b", ...]

  // 게임 상태
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [matchedCardsCount, setMatchedCardsCount] = useState(0); // 현재까지 매치된 카드 쌍의 개수
  const [history, setHistory] = useState([]); // { cards: [value1, value2], isMatch: boolean }

  // 게임 종료 상태
  const [gameResult, setGameResult] = useState(null); // 'win' | 'lose' | null

  // 카드 비교 중 상태 (추가 클릭 방지)
  const isComparing = useRef(false);

  // 총 카드 pair 개수
  const totalPairs = deck.length / 2;

  // 타이머
  useEffect(() => {
    // 게임이 시작되지 않았거나, 끝나서 결과가 나왔다면 return
    if (!isGameStarted || gameResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameResult("lose");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameStarted, gameResult]);

  // 승리 체크
  useEffect(() => {
    if (matchedCardsCount === totalPairs) {
      setGameResult("win");
    }
  }, [matchedCardsCount, totalPairs]);

  // 게임 종료 시 3초 후 초기화
  useEffect(() => {
    if (gameResult) {
      const timeout = setTimeout(() => {
        handleReset();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [gameResult]);

  // 카드 클릭 핸들러
  const handleCardClick = (card) => {
    // 게임 시작 전이면 클릭한 순간부터 게임 시작
    if (!isGameStarted) {
      setIsGameStarted(true);
    }

    // 카드 클릭 불가 조건 세팅
    if (
      isComparing.current || // 카드 비교 중이면 다른 카드 클릭 무시
      flippedCards.length >= 2 || // 이미 2장 뒤집힘
      flippedCards.find((c) => c.id === card.id) || // 이미 뒤집힌 카드
      matchedCards.includes(card.id) || // 이미 매치된 카드
      gameResult // 게임 종료
    ) {
      return;
    }

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    // 두 장째 카드 뒤집었을 때
    if (newFlipped.length === 2) {
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
        // 매치 실패 시 700ms 후 뒤집기
        setTimeout(() => {
          setHistory((prev) => [
            { cards: [first.value, second.value], isMatch: false },
            ...prev,
          ]);
          setFlippedCards([]);
          isComparing.current = false; // 700ms동안은 다른 카드 클릭 시에도 이벤트 발생 X, 700ms 후 해제
        }, 700);
      }
    }
  };

  // 게임 리셋
  const handleReset = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setIsGameStarted(false);
    setTimeLeft(45);
    setMatchedCardsCount(0);
    setHistory([]);
    setGameResult(null);
    isComparing.current = false;
    resetDeck();
  };

  return {
    flippedCards,
    matchedCards,
    isGameStarted,
    timeLeft,
    matchedCardsCount,
    totalPairs,
    history,
    gameResult,
    handleCardClick,
    handleReset,
  };
};
