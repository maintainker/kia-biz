import { style } from "@vanilla-extract/css";

export const accordionContainer = style({
  display: "flex",
  flexDirection: "column",
  borderTop: "2px solid #05141f",
  listStyleType: "none",
  padding: 0,
});
export const listView = style({
  padding: 0,
  border: 0,
  background: "none",
  height: "62px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  paddingRight: "16px",
  borderBottom: "1px solid #e6e8e9",
  cursor: "pointer",
});

export const listViewSpan = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const category = style({
  width: "184px",
  color: "#697278",
  fontSize: "18px",
});
export const question = style({
  flex: 1,
  justifyContent: "start",
  paddingLeft: "20px",
  fontSize: "18px",
  fontWeight: "bolder",
});

export const arrowIcon = style({
  fontSize: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  "::before": {
    content: '""',
    background: "url(/icon/ic_arrow_down-icon.svg)",
    backgroundSize: "auto 100%;",
    display: "block",
    width: "100%",
    height: "100%",
    transition: "transform 1s ease",
  },
  selectors: {
    [`.active &::before`]: {
      transform: "rotate(180deg)",
    },
  },
});

export const answerContainer = style({
  fontSize: "18px !important",
  lineHeight: "1.8",
  maxHeight: 0,
  transition: "max-height 1s ease",
  overflow: "hidden",
  selectors: {
    [`.active &`]: {
      borderBottom: "1px solid #e6e8e9",
      maxHeight: "375px",
      padding: "24px 32px",
    },
  },
});
