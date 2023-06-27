import { styled } from "@/shared/lib/styles";

export const TokensList = styled("div", {});

export const Token = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  minWidth: "360px",
  margin: "0 -20px",
  padding: "8px 20px",

  backgroundColor: "transparent",
  border: "1px solid transparent",

  textAlign: "left",

  transition: "$default",

  "@toWideMobile": {
    minWidth: 320,
  },

  variants: {
    selected: {
      true: {
        borderColor: "$border",
      },
    },
  },
});

export const TokenInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 6,
});

export const TokenImg = styled("img", {
  width: 25,
  height: 25,

  borderRadius: 100,
});

export const TokenWrapper = styled("div");

export const TokenSymbol = styled("span", {
  display: "block",

  fontSize: "$defaultSmall",
  fontWeight: "$black",
});

export const TokenName = styled("span", {
  fontSize: "$little",
  fontWeight: "$bold",
});

export const TokenPrice = styled("span", {
  fontSize: "$defaultSmall",
  fontWeight: "$bold",
});
