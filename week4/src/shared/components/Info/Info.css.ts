import { style } from "@vanilla-extract/css";
import { colors } from "@styles/tokens/colors.css";
import { typographyVars } from "@styles/tokens/typography.css";

export const infoContainer = style({
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  marginTop: "20px",
});

export const infoLeft = style({
  color: colors.gray500,
  ...typographyVars.body_m_14,
});

export const infoRight = style({
  ...typographyVars.title_sb_16,
  color: colors.gray000,
});
