import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const wrapper = style({
  maxWidth: "680px",
  margin: "0 auto",
  padding: "24px 16px",
});

export const heading = style({
  fontSize: "22px",
  marginBottom: "16px",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const label = style({
  fontSize: "13px",
  fontWeight: 600,
});

export const counter = style({
  margin: 0,
  textAlign: "right",
  fontSize: "12px",
  color: vars.colors.subText,
});

export const input = style({
  padding: "10px 12px",
  border: `1px solid ${vars.colors.line}`,
  borderRadius: "8px",
  backgroundColor: vars.colors.surface,
  color: vars.colors.text,
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
  },
});

export const textarea = style([
  input,
  {
    minHeight: "240px",
    resize: "vertical",
    fontFamily: "inherit",
  },
]);

export const buttons = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
});

export const cancelButton = style({
  padding: "10px 16px",
  border: `1px solid ${vars.colors.line}`,
  borderRadius: "8px",
  backgroundColor: "transparent",
  color: vars.colors.text,
  cursor: "pointer",
});

export const submitButton = style({
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

export const message = style({
  textAlign: "center",
  color: vars.colors.subText,
});
