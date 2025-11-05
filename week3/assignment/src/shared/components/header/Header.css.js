import { style } from "@vanilla-extract/css";
import { colors } from "../../styles/tokens/colors.css";
import { typographyStyle } from "../../styles/tokens/typography.css";
import { recipe } from "@vanilla-extract/recipes";
import { layout } from "../../styles/tokens/layout.css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: layout.containerWidth.large,
  padding: "24px",
  borderRadius: layout.borderRadius.large,
  backgroundColor: colors.gray800,
  marginTop: "30px",
});

export const title = style({
  ...typographyStyle("heading_sb_22"),
  color: colors.gray000,
});

export const buttonContainer = style({
  display: "flex",
  gap: "10px",
});

export const button = recipe({
  base: {
    display: "flex",
    padding: "8px 12px",
    ...typographyStyle("body_m_14"),
    textAlign: "center",
    borderRadius: layout.borderRadius.large,

    ":active": {
      transform: "scale(0.98)",
    },
  },
  variants: {
    type: {
      game: {
        backgroundColor: colors.green,
        color: colors.gray000,
      },
      ranking: {
        backgroundColor: colors.error,
        color: colors.gray000,
      },
    },
  },
});
