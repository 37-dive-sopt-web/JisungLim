import { style } from "@vanilla-extract/css";
import { colors } from "../../shared/styles/tokens/colors.css";
import { layout } from "../../shared/styles/tokens/layout.css";

export const container = style({
  display: "flex",
  width: layout.containerWidth.large,
  height: '700px',
  padding: "24px",
  borderRadius: layout.borderRadius.large,
  backgroundColor: colors.gray800,
  gap: '20px',
});


