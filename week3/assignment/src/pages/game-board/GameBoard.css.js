import { style } from "@vanilla-extract/css";
import { colors } from "../../styles/tokens/colors.css";
import { typographyStyle } from "../../styles/tokens/typography.css";
import { recipe } from "@vanilla-extract/recipes";
import { layout } from "../../styles/tokens/layout.css";

export const container = style({
  display: "flex",
  width: layout.containerWidth.large,
  padding: "24px",
  borderRadius: layout.borderRadius.large,
  backgroundColor: colors.gray800,
});


