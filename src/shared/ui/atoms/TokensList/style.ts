import { styled } from "@/shared/lib/styles";

export const TokensList = styled("div", {
  display: "grid",
  gap: 12,
});

export const Token = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
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
