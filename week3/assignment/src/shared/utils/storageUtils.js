import { CARD_GAME } from "../constants/storageKey";

export const saveGameResult = (result) => {
  const results = getGameResults();
  const newResults = [result, ...results];
  localStorage.setItem(CARD_GAME, JSON.stringify(newResults));
};

export const getGameResults = () => {
  const data = localStorage.getItem(CARD_GAME);
  return data ? JSON.parse(data) : [];
};

export const clearGameResults = () => {
  localStorage.removeItem(CARD_GAME);
};
