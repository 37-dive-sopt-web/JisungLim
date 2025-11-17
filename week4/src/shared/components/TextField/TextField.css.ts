import { style } from "@vanilla-extract/css";
import { colors } from "@styles/tokens/colors.css";
import { typographyVars } from "@styles/tokens/typography.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  minWidth: "400px",
  gap: "8px",
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  margin: "0 2px",
  gap: "2px",
});

export const label = style({
  color: colors.gray500,
  ...typographyVars.body_m_14,
});

export const detail = style({
  color: colors.gray700,
  ...typographyVars.caption_r_12,
});

export const textField = style({
  minWidth: "400px",
  height: "44px",
  ...typographyVars.body_r_14,
  color: colors.gray000,
  padding: "0 16px",
  backgroundColor: colors.gray000_02,
  borderRadius: "10px",
  transition: "all 0.2s ease",
  outline: "none",

  "::placeholder": {
    color: colors.gray800,
  },

  ":hover": {
    backgroundColor: colors.gray000_04,
  },

  ":active": {
    backgroundColor: colors.gray000_02,
  },

  ":focus": {
    backgroundColor: colors.gray000_04,
  },

  selectors: {
    "&:not(:placeholder-shown)": {
      backgroundColor: colors.gray000_02,
    },
  },
});

export const textFieldError = style({
  backgroundColor: colors.error_08,
  color: colors.error,

  "::placeholder": {
    color: colors.error,
  },

  ":focus": {
    backgroundColor: colors.error_08,
    color: colors.error,
  },
});
