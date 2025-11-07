import { style } from "@vanilla-extract/css";
import { colors } from "../../styles/tokens/colors.css";
import { typographyStyle } from "../../styles/tokens/typography.css";
import { layout } from "../../styles/tokens/layout.css";

export const overlay = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
});

export const modalContent = style({
  display: "flex",
  flexDirection: "column",
  minWidth: "40rem",
  backgroundColor: colors.gray700,
  borderRadius: layout.borderRadius.large,
  padding: "4rem",
  gap: "2.4rem",
  alignItems: "center",
});

export const title = style({
  ...typographyStyle("heading_sb_22"),
  color: colors.gray000,
});

export const message = style({
  ...typographyStyle("body_r_14"),
  color: colors.gray300,
  textAlign: "center",
});
