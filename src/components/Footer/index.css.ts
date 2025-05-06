import { style } from "@vanilla-extract/css";

export const footerContainer = style({
  padding: "0 48px",
  background: "#05141f",
  height: "176px",
  display: "flex",
  flexDirection: "row-reverse",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#82898f",
  alignItems: "center",
});

export const copyRight = style({
  display: "flex",
  flexDirection: "column",
  "::before": {
    content: "''",
    height: "56px",
    background: "url(/images/logo_kia.svg)",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
  },
});

export const utilList = style({
  display: "flex",
  gap: "24px",
  justifyContent: "end",
});

export const utilButton = style({
  border: 0,
  background: "none",
  color: "#fff",
  padding: 0,
  fontSize: "16px",
  lineHeight: "24px",
});

export const informationContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "right",
  textAlign: "right",
  gap: "10px",
});
export const informationList = style({
  display: "inline-flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "flex-end",
  fontStyle: "normal",
});

export const informationItem = style({
  marginLeft: "12px",
});
export const informationContent = style({
  marginLeft: "4px",
  color: "#82898f",
  textDecoration: "none",
  fontStyle: "normal",
  selectors: {
    ["&.company"]: {
      marginLeft: "12px",
    },
  },
});
