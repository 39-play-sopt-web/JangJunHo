import { createGlobalTheme } from "@vanilla-extract/css";

// 전체 테마
export const vars = createGlobalTheme(":root", {
  colors: {
    background: "black",
    text: "white",
    primary: "aquamarine",
    border: "white",
    hover: "gray",
    accent: "skyblue",
    line: "dimgray",
    surface: "#1c1c1c",
    subText: "gray",
  },
});
