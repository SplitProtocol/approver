import { FC } from "react";

import * as S from "./style";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ children, size, stretch, ...props }) => (
  <S.Button size={size} stretch={stretch} {...props}>
    {children}
  </S.Button>
);
