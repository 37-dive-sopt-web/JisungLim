import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./tokens/colors.css";

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("body", {
  minWidth: "128rem",
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
