import { recipe } from "@vanilla-extract/recipes";
import { colors } from "@styles/tokens/colors.css";
import { typographyVars } from "@styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const container = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    minWidth: "400px",
  },
  variants: {
    size: {
      small: {
        gap: "8px",
      },
      large: {
        gap: "12px",
      },
    },
  },
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  margin: "0 2px",
  gap: "2px",
});

export const label = recipe({
  base: {
    color: colors.gray500,
  },
  variants: {
    size: {
      small: {
        ...typographyVars.body_m_14,
      },
      large: {
        ...typographyVars.title_m_16,
      },
    },
  },
});

export const detail = recipe({
  base: {
    color: colors.gray700,
  },
  variants: {
    size: {
      small: {
        ...typographyVars.caption_r_12,
      },
      large: {
        ...typographyVars.body_r_14,
      },
    },
  },
});

export const textField = recipe({
  base: {
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

    // focused/typing
    ":focus": {
      backgroundColor: colors.gray000_04,
    },

    // filled (값이 입력된 상태)
    selectors: {
      "&:not(:placeholder-shown)": {
        backgroundColor: colors.gray000_02,
      },
    },
  },

  variants: {
    error: {
      true: {
        backgroundColor: colors.error_08,
        color: colors.error,

        "::placeholder": {
          color: colors.error,
        },

        ":focus": {
          backgroundColor: colors.error_08,
          color: colors.error,
        },
      },
      false: {},
    },
  },
});
