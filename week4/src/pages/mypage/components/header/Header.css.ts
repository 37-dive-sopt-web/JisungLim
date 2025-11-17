import { colors } from "@styles/tokens/colors.css";
import { typographyVars } from "@styles/tokens/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '25px 150px',
    alignItems: 'center',
    backgroundColor: colors.gray700,
})

export const title = style({
    fontSize: "3rem",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
    color: colors.gray000,
})

export const subtitle = style({
    ...typographyVars.title_r_16,
    color: colors.gray000,
})

export const tabContainer = style({
    display: 'flex',
    gap: '20px',
})