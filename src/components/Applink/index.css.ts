import { style } from "@vanilla-extract/css";

export const AppLinkContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  padding: "32px",
  background: "#f8f8f8",
  borderRadius: "16px",
  marginTop: "48px",
});

export const AppLinkTitle = style({
  margin: 0,
  fontSize: "24px",
  lineHeight: 1.4,
});

export const ButtonContainer = style({
  display: "flex",
  gap: "16px",
});

export const AppLinkButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: "#000",
  width: "269px",
  height: "60px",
  borderRadius: "8px",
  background: "#fff",
  gap: "4px",
  fontSize: "16px",
  fontWeight: "600",
});
export const AppLinkIcon = style({
  width: "28px",
  height: "28px",
  selectors: {
    ["&.google"]: {
      background: "url(/images/logo_googleplay.svg)",
      backgroundSize: "auto 100%;",
    },
    ["&.apple"]: {
      background: "url(/images/logo_appstore.svg)",
      backgroundSize: "auto 100%;",
    },
  },
});
