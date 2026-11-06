import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const wrapper = style({
  maxWidth: "680px",
  margin: "0 auto",
  padding: "24px 16px",
});

export const searchForm = style({
  display: "flex",
  gap: "8px",
  marginBottom: "16px",
});

export const searchInput = style({
  flex: 1,
  padding: "10px 12px",
  border: `1px solid ${vars.colors.line}`,
  borderRadius: "8px",
  backgroundColor: vars.colors.surface,
  color: vars.colors.text,
});

export const searchButton = style({
  padding: "10px 16px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: vars.colors.primary,
  cursor: "pointer",
  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const message = style({
  textAlign: "center",
  color: vars.colors.subText,
});
