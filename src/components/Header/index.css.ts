import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 48px",
  backgroundColor: "#fff",
  position: "sticky",
  height: "80px",
  top: "0",
  zIndex: 100,
});

export const logo = style({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#000",
  backgroundImage: "url('/images/logo_kiabiz_sm.svg')",
  width: "110px",
  height: "40px",
});

export const nav = style({
  display: "flex",
  gap: "30px",
});

export const navLink = style({
  display: "block",
  fontSize: "18px",
  color: "#000",
  textDecoration: "none",
  fontWeight: "600",
  margin: "0 16px",
});

export const active = style({
  boxShadow: "0 4px 32px 0 rgba(0,0,0,.08)",
});
