import { styled } from "@/shared/lib/styles";

export const Root = styled("div");

export const UserInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const Address = styled("div", {
  padding: "6px 8px",

  border: "1px solid $borderTertiary",
  borderRadius: "$medium",
  backgroundColor: "$blockSecondary",

  fontSize: "$little",
});

export const DropdownWrapper = styled("div", {
  position: "relative",
});

export const Trigger = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: 6,

  width: "100%",
  padding: "4px 8px",

  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: "$medium",
  border: "1px solid $borderTertiary",
  background: "$blockSecondary",
});

export const Dropdown = styled("div", {
  position: "absolute",
  zIndex: 100,
  right: 0,
  top: "calc(100% + 10px)",

  width: "150px",
  padding: "16px 10px",

  visibility: "hidden",
  opacity: 0,
  background: "#1A1A1A",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow: "0 0 16px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px",

  transition: "$default",

  variants: {
    isOpened: {
      true: {
        top: "calc(100% + 5px)",

        visibility: "visible",
        opacity: 1,
      },
    },
  },
});

export const List = styled("ul", {
  display: "grid",
  gap: 6,

  margin: 0,
  padding: 0,

  listStyle: "none",
});

export const Item = styled("li", {
  display: "flex",
  alignItems: "center",
});

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  padding: "4px 10px",

  backgroundColor: "transparent",
  border: "none",

  color: "$text",
  fontWeight: "$bold",
  fontSize: "$little",
  lineHeight: "12px",
});

export const Text = styled("span", {
  color: "$text",
  fontWeight: "$bold",
  lineHeight: "19px",
});
