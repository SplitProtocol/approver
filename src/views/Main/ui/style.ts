import { styled } from "@/shared/lib/styles";

export const Root = styled("section");

export const Block = styled("div", {
  maxWidth: 360,
  margin: "0 auto",
  padding: "24px 20px 34px",

  backgroundColor: "$block",
  borderRadius: "$large",
});

export const Title = styled("h2", {
  margin: "0 0 46px",

  fontSize: "15px",
  fontWeight: "$black",
});

export const Search = styled("div", {
  marginBottom: 24,
});

export const Tokens = styled("div", {
  position: "relative",

  marginBottom: 16,
  paddingBottom: 16,

  "&::after": {
    content: "",

    position: "absolute",
    right: -20,
    bottom: 0,
    left: -20,

    height: 1,

    backgroundColor: "$borderSecondary",
  },
});

export const TokensTitle = styled("span", {
  display: "block",

  marginBottom: 10,

  fontWeight: "$bold",
});

export const TokensList = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 12,
});

export const TokensItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 6,

  fontSize: "$defaultSmall",
  fontWeight: "$black",
});

export const TokensImg = styled("img", {
  width: 25,
  height: 25,

  borderRadius: 100,
});

export const SubmitButton = styled("div", {
  marginTop: 34,
  padding: "0 10px",
});
