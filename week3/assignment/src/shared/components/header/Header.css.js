import { style } from "@vanilla-extract/css";
import { colors } from "../../styles/tokens/colors.css";
import { typographyStyle } from "../../styles/tokens/typography.css";
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
