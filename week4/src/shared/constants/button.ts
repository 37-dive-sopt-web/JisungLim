export const BUTTON_VARIANTS = {
  CONFIRM: "confirm",
  DEFAULT: "default",
  TEXT_MEDIUM: "text-medium",
  TEXT_SMALL: "text-small",
} as const;

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
