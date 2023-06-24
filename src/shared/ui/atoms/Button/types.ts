import { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  stretch?: boolean;
  size?: "default" | "large";
};
