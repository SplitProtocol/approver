import { styled } from "@/shared/lib/styles";

export const Button = styled("button", {
  padding: "6px 8px",

  backgroundColor: "$accent",
  borderRadius: "$default",
  border: "none",

  color: "$textDark",
  fontSize: "$small",
  fontWeight: "$bold",

  variants: {
    stretch: {
      true: {
        width: "100%",
      },
    },
    size: {
      default: {},
      large: {
        padding: "12px 16px",

        fontSize: "$large",
      },
    },
  },
});
