import { style } from "@vanilla-extract/css";
import { colors } from "../../../shared/styles/tokens/colors.css";
import { layout } from "../../../shared/styles/tokens/layout.css";
import { typographyStyle } from "../../../shared/styles/tokens/typography.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  flex: 35,
  backgroundColor: colors.gray700,
  borderRadius: layout.borderRadius.large,
});
