import { globalCss } from "@stitches/react";

export const setupStyles = globalCss({
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    backgroundColor: "$background",

    color: "$text",
    fontFamily: "$roboto",
    fontSize: "$default",
    lineHeight: "100%",

    transition: "$long",
  },
  a: {
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  },
  li: {
    listStyle: "none",
  },
  ul: {
    margin: "0",
    padding: "0",
  },
  input: {
    outline: "none",
    border: "none",
  },
  button: {
    outline: "none",
    border: "none",
    cursor: "pointer",
    color: "inherit",
  },
  "*, ::before, ::after": {
    boxSizing: "border-box",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
  },
  ".visually-hidden": {
    position: "absolute",

    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,

    whiteSpace: "nowrap",

    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
  },
});
