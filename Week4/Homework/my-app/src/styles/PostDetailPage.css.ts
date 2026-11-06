import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const wrapper = style({
  maxWidth: "680px",
  margin: "0 auto",
  padding: "24px 16px",
});

export const title = style({
  margin: "0 0 12px",
  fontSize: "24px",
});

export const meta = style({
  display: "flex",
  gap: "8px",
  paddingBottom: "16px",
  borderBottom: `1px solid ${vars.colors.line}`,
  fontSize: "13px",
  color: vars.colors.subText,
});

export const author = style({
  color: vars.colors.primary,
  fontWeight: 600,
});

export const content = style({
  minHeight: "200px",
  margin: "24px 0",
  lineHeight: 1.7,
  whiteSpace: "pre-wrap",
});

export const buttons = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
});

export const subButton = style({
  padding: "10px 16px",
  border: `1px solid ${vars.colors.line}`,
  borderRadius: "8px",
  backgroundColor: "transparent",
  color: vars.colors.text,
  cursor: "pointer",
});

export const mainButton = style({
  padding: "10px 16px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: vars.colors.primary,
  cursor: "pointer",
});

export const message = style({
  textAlign: "center",
  color: vars.colors.subText,
});
