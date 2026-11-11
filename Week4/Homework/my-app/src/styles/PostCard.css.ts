import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const card = style({
  display: "block",
  padding: "18px 20px",
  border: "1px solid transparent",
  borderRadius: "12px",
  backgroundColor: vars.colors.surface,
  transition: "border-color 0.2s",
  ":hover": {
    borderColor: vars.colors.primary,
  },
});

export const title = style({
  margin: "0 0 8px",
  fontSize: "16px",
});

export const content = style({
  margin: "0 0 12px",
  fontSize: "14px",
  color: vars.colors.subText,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const meta = style({
  display: "flex",
  gap: "8px",
  fontSize: "12px",
  color: vars.colors.subText,
});

export const author = style({
  color: vars.colors.primary,
  fontWeight: 600,
});
