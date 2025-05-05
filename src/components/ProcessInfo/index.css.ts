import { style } from "@vanilla-extract/css";

export const processList = style({
  listStyle: "none",
  display: "flex",
  padding: 0,
});
export const processItem = style({
  flex: 1,
  margin: "0 16px",
  paddingLeft: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  position: "relative",
  "::before": {
    content: "''",
    position: "absolute",
    width: "24px",
    height: "24px",
    background: "url(/icon/ic_step_arrow.svg)",
    left: "-12px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  selectors: {
    "&:first-child": { marginLeft: 0 },
    "&:first-child::before": {
      display: "none",
    },
  },
});
export const processIcon = style({
  width: "56px",
  height: "56px",
  selectors: {
    ["&.step1"]: {
      background: "url(/icon/ic_process01.svg)",
    },
    ["&.step2"]: {
      background: "url(/icon/ic_process02.svg)",
    },
    ["&.step3"]: {
      background: "url(/icon/ic_process03.svg)",
    },
    ["&.step4"]: {
      background: "url(/icon/ic_process04.svg)",
    },
  },
});
export const processInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
export const processInfoTitle = style({
  margin: 0,
  fontSize: "18px",
});
export const processInfoDescription = style({
  fontSize: "16px",
  color: "#37434c",
});
