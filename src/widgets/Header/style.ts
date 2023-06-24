import { styled } from "@/shared/lib/styles";
import { Container } from "@/shared/ui/atoms/styled";

export const Header = styled("header", {
  height: 50,
  marginTop: 24,
  marginBottom: 50,

  [`& > ${Container}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const Logo = styled("div");

export const ConnectWallet = styled("div");
