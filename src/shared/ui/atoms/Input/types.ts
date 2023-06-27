import { HTMLAttributes } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (value: string) => void;
};
