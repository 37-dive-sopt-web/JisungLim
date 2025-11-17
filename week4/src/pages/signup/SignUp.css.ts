import { colors } from "@styles/tokens/colors.css";
import { typographyVars } from "@styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const title = style({
  ...typographyVars.heading_sb_22,
  color: colors.gray000,
  textAlign: "start",
});

export const infoContainer = style({
  display: "flex",
  width: "100%",
  justifyContent: "start",
  marginTop: "6px",
});

export const infoText = style({
  ...typographyVars.body_r_14,
  color: colors.gray400,
  padding: "4px",
});
