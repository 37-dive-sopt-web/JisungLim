import { style } from "@vanilla-extract/css";
import { colors } from "../../../shared/styles/tokens/colors.css";
import { layout } from "../../../shared/styles/tokens/layout.css";
import { typographyStyle } from "../../../shared/styles/tokens/typography.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  flex: 65, // GameBoard와 GameInfo의 가로너비 비율이 65:35
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const headerTitle = style({
  ...typographyStyle("title_sb_16"),
  color: colors.gray000,
});

export const resetButton = style({
  ...typographyStyle("body_m_14"),
  backgroundColor: colors.error,
  color: colors.gray000,
  padding: "4px 8px",
  borderRadius: layout.borderRadius.full,
  transition: "all 0.2s",

  ":hover": {
    opacity: 0.9,
    transform: "scale(0.98)",
  },

  ":active": {
    transform: "scale(0.95)",
  },
});

export const boardGrid = style({
  display: "grid",
  gap: "12px",
  width: "100%",
});

export const card = style({
  aspectRatio: "1 / 1",
  backgroundColor: colors.green,
  borderRadius: layout.borderRadius.xlarge,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "48px",
  fontWeight: 700,
  color: colors.gray000,
  cursor: "pointer",
  transition: "all 0.2s",

  ":hover": {
    opacity: 0.9,
    transform: "scale(0.98)",
  },

  ":active": {
    transform: "scale(0.95)",
  },
});
