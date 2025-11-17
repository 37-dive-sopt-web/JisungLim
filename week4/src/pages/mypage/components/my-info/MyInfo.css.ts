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

export const idContainer = style({
  display: "flex",
  flex: 1, // 부모 너비 다 차지
  justifyContent: "space-between",
  marginTop: '20px',
});

export const idLeft = style({
  color: colors.gray500,
  ...typographyVars.body_m_14,
});

export const idRight = style({
  ...typographyVars.title_sb_16,
  color: colors.gray000,
});

export const title = style({
  ...typographyVars.heading_sb_22,
  color: colors.gray000,
  textAlign: "start",
});

export const inputContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  marginTop: "24px",
});
