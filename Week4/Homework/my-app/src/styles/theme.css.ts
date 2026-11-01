import { createGlobalTheme } from "@vanilla-extract/css";

// 전체 테마 (:root에 CSS 변수로 등록되어 어디서나 vars로 꺼내 씀)
export const vars = createGlobalTheme(":root", {
  colors: {
    background: "white",
    text: "black",
    primary: "aquamarine",
  },
});
