import { style } from "@vanilla-extract/css";

export const filterContainer = style({
  display: "flex",
});
export const filterButton = style({
  background: "none",
  height: "48px",
  border: 0,
  padding: "0 20px",
  cursor: "pointer",
  minWidth: "48px",
  fontWeight: "600",
  fontSize: "18px",
  selectors: {
    "&.active": {
      background: "#000",
      color: "#fff",
      borderRadius: "24px",
    },
  },
});
