import { style } from "@vanilla-extract/css";

export const contents = style({
  maxWidth: "1336px",
  width: "100%",
  margin: "0 auto ",
  padding: "0 48px 80px",
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
});

export const sectionContainer = style({
  marginBottom: "20px",
});

export const sectionTitle = style({
  margin: "48px 0 24px",
  fontSize: "24px",
  lineHeight: 1.4,
});
export const infoContainer = style({
  display: "flex",
  gap: "24px",
  margin: "0 12px",
});

export const infoButton = style({
  textDecoration: "none",
  color: "#000",
  minHeight: "80px",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #05141f",
  gap: "8px",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: 1.4,
});

export const buttonIcon = style({
  width: "48px",
  height: "48px",
  selectors: {
    ["&.download"]: {
      background: "url(/icon/ic_download.svg)",
    },
    ["&.regist"]: {
      background: "url(/icon/ic_write.svg)",
    },
    ["&.ask"]: {
      background: "url(/icon/ic_talk.svg)",
    },
  },
});
export const buttonContent = style({
  display: "flex",
  flexDirection: "column",
});

export const kakaoId = style({
  color: "#697278",
  fontSize: "14px",
  fontWeight: 400,
});
