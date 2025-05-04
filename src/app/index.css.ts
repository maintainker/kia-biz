import { style } from "@vanilla-extract/css";

export const contents = style({
  width: "1240px",
  margin: "0 auto 96px",
});
export const titleContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  height: "222px",
  justifyContent: "center",
});

export const title = style({
  fontSize: "48px",
  margin: 0,
});
export const description = style({
  fontSize: "20px",
});

export const tabContainer = style({
  marginBottom: "40px",
});

export const searchContainer = style({
  padding: "20px",
  background: "#f8f8f8",
  marginBottom: "20px",
});
