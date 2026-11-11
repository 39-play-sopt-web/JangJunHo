import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

// 전체 기본 스타일
globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("ul", {
  margin: 0,
  padding: 0,
  listStyle: "none",
});
