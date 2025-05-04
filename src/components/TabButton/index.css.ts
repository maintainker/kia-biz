import { style } from "@vanilla-extract/css";

export const tabContainer = style({
  display: "flex",
  justifyContent: "center",
});

export const tab = style({
  padding: "10px 20px",
  fontSize: "20px",
  backgroundColor: "#fff",
  border: "none",
  cursor: "pointer",
  color: "#000",
  flex: 1,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#cdd0d2",
  height: "54px",
  selectors: {
    [`${tabContainer} &:not(:first-child)`]: {
      marginLeft: "-4px",
    },
  },
});

export const activeTab = style({
  backgroundColor: "#000",
  color: "#fff",
  fontWeight: "bold",
  border: 0,
});
