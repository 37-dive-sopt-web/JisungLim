import { colors } from "@styles/tokens/colors.css";
import { typographyVars } from "@styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
})

export const title = style({
    ...typographyVars.heading_sb_22,
    color: colors.gray000,
    textAlign: 'start',
})

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  marginTop: '24px',
})

export const signUpContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginTop: '6px',
})
