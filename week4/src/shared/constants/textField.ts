export const TEXT_FIELD_TYPES = {
  ID: "id",
  PASSWORD: "password",
  TEXT: "text",
} as const;

export type TextFieldType =
  (typeof TEXT_FIELD_TYPES)[keyof typeof TEXT_FIELD_TYPES];
