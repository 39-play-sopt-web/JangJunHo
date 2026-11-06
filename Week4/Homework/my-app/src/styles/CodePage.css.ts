import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

// 화면 가운데 정렬
export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",
  maxWidth: "400px",
  minHeight: "100vh",
  margin: "0 auto",
  padding: "0 16px",
});

// 파트 선택, 발급 버튼 한 줄
export const form = style({
  display: "flex",
  gap: "8px",
});

export const select = style({
  flex: 1,
  padding: "12px",
  borderRadius: "8px",
});

// 코드 발급 버튼 (hover 시 배경색 + 테두리 색 변경)
export const issueButton = style({
  padding: "12px 16px",
  border: "2px solid transparent",
  borderRadius: "8px",
  backgroundColor: vars.colors.primary,
  cursor: "pointer",
  transition: "background-color 0.2s, border-color 0.2s",
  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: vars.colors.hover,
      borderColor: vars.colors.border,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

// 게시판 목록 보기 (링크를 버튼처럼)
export const listLink = style({
  padding: "12px",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "8px",
  textAlign: "center",
});
