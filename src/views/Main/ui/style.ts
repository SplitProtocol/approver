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
