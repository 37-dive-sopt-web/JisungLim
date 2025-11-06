export const INITIAL_TIME_LIMIT = 45; // 시간 제한
export const TIMER_INTERVAL = 100; // 타이머 갱신 주기
export const CARD_FLIP_DELAY = 700; // 매치 실패 시에 카드 뒤집는 딜레이
export const GAME_RESET_DELAY = 3000; // 게임 종료 후 리셋 딜레이
export const MAX_FLIPPED_CARDS = 2; // 동시에 뒤집을 수 있는 카드의 개수
export const WARNING_MESSAGE_TIME = 2000; // 안내 메시지 띄우는 시간

export const GAME_RESULT = {
  WIN: "win",
  LOSE: "lose",
  IN_PROGRESS: "in_progress",
  NOT_STARTED: "not_started",
};

export const GAME_MESSAGES = {
  WIN: "WIN! 3초 뒤에 보드가 초기화됩니다.",
  LOSE: "LOSE! 시간이 초과되었습니다.",
  IN_PROGRESS: "게임 진행 중입니다!",
  NOT_STARTED: "카드를 뒤집어 게임을 시작하세요",
  ALREADY_FLIPPED: "이미 뒤집힌 카드입니다!",
  GAME_ENDED: "게임이 종료되었습니다!",
};
