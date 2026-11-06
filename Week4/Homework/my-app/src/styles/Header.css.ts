import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 24px",
  borderBottom: `1px solid ${vars.colors.line}`,
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const logo = style({
  fontSize: "18px",
  fontWeight: 800,
});

export const logoAccent = style({
  color: vars.colors.accent,
});

export const partBadge = style({
  padding: "3px 10px",
  border: `1px solid ${vars.colors.line}`,
  borderRadius: "999px",
  fontSize: "11px",
  fontWeight: 600,
  color: vars.colors.primary,
});

export const nav = style({
  display: "flex",
  gap: "24px",
});

export const tab = style({
  padding: 0,
  border: "none",
  background: "none",
  color: vars.colors.text,
  fontSize: "14px",
  cursor: "pointer",
  transition: "color 0.2s",
  selectors: {
    "&:hover": {
      color: vars.colors.primary,
    },
    "&.active": {
      color: vars.colors.primary,
    },
  },
});
