import { style } from "@vanilla-extract/css";
import { colors } from "../../../../shared/styles/tokens/colors.css";
import { layout } from "../../../../shared/styles/tokens/layout.css";
import { typographyStyle } from "../../../../shared/styles/tokens/typography.css";
// import { typographyStyle } from "../../../shared/styles/tokens/typography.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  flex: 35,
  backgroundColor: colors.gray700,
  borderRadius: layout.borderRadius.large,
  padding: '24px',
});

export const levelInput = style({
  width: '100%',
  ...typographyStyle('title_sb_16'),
  color: colors.gray000,
  borderRadius: layout.borderRadius.xlarge,
  backgroundColor: colors.gray600,
  padding: '6px',
  marginTop: '4px',
})

export const gameStateBoxContainer = style({
  width: '100%',
  display: 'flex',
  gap: '12px',
  marginTop: '24px',
})

export const gameStateBox = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  gap: '2px',
  borderRadius: layout.borderRadius.xlarge,
  backgroundColor: colors.gray600,
  flex: 1,
  alignItems: 'center',
})

export const gameStateTypeText = style({
  ...typographyStyle('body_m_14'),
  color: colors.gray300,
})

export const gameStateValue = style({
  ...typographyStyle('heading_sb_22'),
  color: colors.gray000,
})

export const infoCategoryText = style({
  ...typographyStyle('title_sb_16'),
  color: colors.gray000,
  marginTop: '24px',
})

export const warningMessageBox = style({
  width: '100%',
  padding: '24px 12px',
  borderRadius: layout.borderRadius.xlarge,
  backgroundColor: colors.gray600,
  color: colors.gray000,
  ...typographyStyle('title_r_16'),
  marginTop: '8px',
})

export const historyContainer = style({
  width: '100%',
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  // maxHeight: '300px',
  overflowY: 'auto',
})

export const noHistoryText = style({
  ...typographyStyle('body_r_14'),
  color: colors.gray400,
  padding: '24px',
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const historyBox = style({
  width: '100%',
  padding: '12px',
  borderRadius: layout.borderRadius.medium,
  backgroundColor: colors.gray600,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const historyCardId = style({
  ...typographyStyle('title_m_16'),
  color: colors.gray000,
})

export const historyResultText = style({
  ...typographyStyle('body_m_14'),
})

export const success = style({
  color: colors.green,
})

export const fail = style({
  color: colors.error,
})