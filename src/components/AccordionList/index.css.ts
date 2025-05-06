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

export const noData = style({
  width: "100%",
  padding: "160px 0",
  alignItems: "center",
  gap: "16px",
  color: "#697278",
  lineHeight: "1.6",
  fontSize: "18px",
  borderBottom: "1px solid #e6e8e9",
  "::before": {
    content: "''",
    display: "block",
    background: "url(/icon/ic_nodata.svg)",
    backgroundSize: "auto 100%",
    width: "56px",
    height: "56px",
  },
});
export const loadingView = style({
  width: "100%",
  padding: "180px 0",
  borderBottom: "1px solid #e6e8e9",
});

export const moreButton = style({
  height: "56px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "32px",
  gap: "4px",
  background: "none",
  border: 0,
  cursor: "pointer",
  fontSize: "18px",
});
export const plusIcon = style({
  position: "relative",
  height: "14px",
  width: "14px",
  top: "-1px",
  "::before": {
    content: "''",
    width: "2px",
    background: "#000",
    height: "100%",
    display: "block",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  "::after": {
    content: "''",
    background: "#000",
    width: "100%",
    height: "2px",
    display: "block",
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
});
