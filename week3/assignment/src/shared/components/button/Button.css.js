import { recipe } from "@vanilla-extract/recipes";
import { colors } from "../../styles/tokens/colors.css";
import { typographyStyle } from "../../styles/tokens/typography.css";
import { layout } from "../../styles/tokens/layout.css";

export const button = recipe({
  base: {
    display: "flex",
    padding: "8px 12px",
    ...typographyStyle("body_m_14"),
    textAlign: "center",
    borderRadius: layout.borderRadius.large,
    transition: "all 0.2s",
    cursor: "pointer",
    border: "none",
    color: colors.gray000,

    ":hover": {
      opacity: 0.9,
      transform: "scale(0.98)",
    },

    ":active": {
      transform: "scale(0.95)",
    },
  },
  variants: {
    type: {
      game: {
        backgroundColor: colors.green,
      },
      ranking: {
        backgroundColor: colors.primary,
      },
      reset: {
        backgroundColor: colors.error,
      }
    },
  },
});
