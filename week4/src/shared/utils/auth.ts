const USER_ID_KEY = "userId";

export const saveUserId = (userId: number): void => {
  localStorage.setItem(USER_ID_KEY, userId.toString());
};

export const getUserId = (): number | null => {
  const userId = localStorage.getItem(USER_ID_KEY);
  return userId ? Number(userId) : null;
};

export const clearUserId = (): void => {
  localStorage.removeItem(USER_ID_KEY);
};
