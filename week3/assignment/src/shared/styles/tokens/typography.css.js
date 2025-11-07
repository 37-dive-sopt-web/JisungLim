/**
 * Typography Design Tokens
 * 프로젝트 전역에서 사용되는 타이포그래피 토큰을 정의합니다.
 */

// font weight 상수
const fontWeight = {
  semibold: 600,
  medium: 500,
  regular: 400,
};

export const typographyVars = {
  heading_sb_60: {
    fontSize: "6rem",
    fontWeight: fontWeight.semibold,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  heading_sb_22: {
    fontSize: "2.2rem",
    fontWeight: fontWeight.semibold,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  title_sb_16: {
    fontSize: "1.6rem",
    fontWeight: fontWeight.semibold,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  title_m_16: {
    fontSize: "1.6rem",
    fontWeight: fontWeight.medium,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  title_r_16: {
    fontSize: "1.6rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  body_m_14: {
    fontSize: "1.4rem",
    fontWeight: fontWeight.medium,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  body_r_14: {
    fontSize: "1.4rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  body_r_14_underline: {
    fontSize: "1.4rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
    textDecoration: "underline",
  },
  caption_m_12: {
    fontSize: "1.2rem",
    fontWeight: fontWeight.medium,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  caption_r_12: {
    fontSize: "1.2rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
  },
  caption_r_12_underline: {
    fontSize: "1.2rem",
    fontWeight: fontWeight.regular,
    lineHeight: "150%",
    letterSpacing: "-0.03em",
    textDecoration: "underline",
  },
};

// typography 헬퍼 함수
export const typographyStyle = (key) => {
  const styleValue = typographyVars[key];
  if (!styleValue) throw new Error(`Invalid typography key: ${key}`);
  return styleValue;
};
