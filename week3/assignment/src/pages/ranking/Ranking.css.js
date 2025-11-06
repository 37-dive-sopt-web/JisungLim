import { style } from "@vanilla-extract/css";
import { colors } from "../../shared/styles/tokens/colors.css";
import { typographyStyle } from "../../shared/styles/tokens/typography.css";
import { layout } from "../../shared/styles/tokens/layout.css";

export const container = style({
  width: layout.containerWidth.large,
  display: "flex",
  flexDirection: "column",
  backgroundColor: colors.gray700,
  borderRadius: layout.borderRadius.large,
  padding: "24px",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
});

export const title = style({
  ...typographyStyle("heading_sb_22"),
  color: colors.gray000,
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
});

export const tableHeader = style({
  backgroundColor: colors.gray600,
});

export const tableHeaderCell = style({
  ...typographyStyle("title_sb_16"),
  color: colors.gray000,
  padding: "16px",
  textAlign: "center",
  borderBottom: `1px solid ${colors.gray500}`,
});

export const tableRow = style({
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: colors.gray600,
  },
});

export const tableCell = style({
  ...typographyStyle("body_r_14"),
  color: colors.gray000,
  padding: "16px",
  textAlign: "center",
  borderBottom: `1px solid ${colors.gray600}`,
});

export const noData = style({
  ...typographyStyle("body_r_14"),
  color: colors.gray400,
  padding: "48px",
  textAlign: "center",
});
