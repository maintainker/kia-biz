import { style } from "@vanilla-extract/css";

export const inputForm = style({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #000",
  background: "#fff",
  flex: 1,
});

export const input = style({
  width: "100%",
  fontSize: "18px",
  border: "none",
  outline: "none",
  height: "56px",
  paddingLeft: "16px",
  background: "#fff",
});

export const submitIcon = style({
  width: "56px",
  position: "absolute",
  right: "1px",
  top: "1px",

  "::before": {
    background: "url(/icon/search-icon.svg)",
    backgroundSize: "auto 100%;",
    width: "36px",
    height: "36px",
  },
});

export const clearIcon = style({
  right: "55px",
  position: "absolute",
  width: "40px",

  selectors: {
    "&.active::before": {
      background: "url(/icon/clear-icon.svg)",
      width: "24px",
      height: "24px",
    },
  },
});

export const iconButton = style({
  cursor: "pointer",
  height: "calc(100% - 2px)",
  fontSize: 0,
  background: "none",
  border: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "::before": {
    backgroundSize: "auto 100%;",
    content: '""',
    position: "absolute",
  },
});
