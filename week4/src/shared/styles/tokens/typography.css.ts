/**
 * Typography Design Tokens
 * 프로젝트 전역에서 사용되는 타이포그래피 토큰을 정의합니다.
 */

// font weight 상수
const fontWeight = {
  semibold: 600,
  medium: 500,
  regular: 400,
} as const;

export const typographyVars = {
  heading_sb_60: {
    fontSize: "3.75rem",
    fontWeight: fontWeight.semibold,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  heading_sb_22: {
    fontSize: "1.375rem",
    fontWeight: fontWeight.semibold,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  title_sb_16: {
    fontSize: "1rem",
    fontWeight: fontWeight.semibold,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  title_m_16: {
    fontSize: "1rem",
    fontWeight: fontWeight.medium,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  title_r_16: {
    fontSize: "1rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  body_m_14: {
    fontSize: "0.875rem",
    fontWeight: fontWeight.medium,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  body_r_14: {
    fontSize: "0.875rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  body_r_14_underline: {
    fontSize: "0.875rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
    textDecoration: "underline" as const,
  },
  caption_m_12: {
    fontSize: "0.75rem",
    fontWeight: fontWeight.medium,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  caption_r_12: {
    fontSize: "0.75rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  caption_r_12_underline: {
    fontSize: "0.75rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
    textDecoration: "underline" as const,
  },
} as const;

// typography 헬퍼 함수
export type TypographyKey = keyof typeof typographyVars;

export const typographyStyle = (key: TypographyKey) => {
  const styleValue = typographyVars[key];
  if (!styleValue) throw new Error(`Invalid typography key: ${key}`);
  return styleValue;
};
