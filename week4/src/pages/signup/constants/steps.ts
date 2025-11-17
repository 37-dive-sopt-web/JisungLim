export const STEPS = {
  ID: 1,
  PASSWORD: 2,
  INFO: 3,
} as const;

export type Step = (typeof STEPS)[keyof typeof STEPS]; // 1 | 2 | 3
