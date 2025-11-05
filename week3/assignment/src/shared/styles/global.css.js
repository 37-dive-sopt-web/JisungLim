import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./tokens/colors.css";

globalStyle("body", {
  minWidth: "1280px",
  fontFamily:
    '"Pretendard Variable", Pretendard, -apple-system, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: colors.gray900,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

globalStyle("#root", {
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
});
