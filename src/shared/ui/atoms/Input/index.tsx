import { FC } from "react";

import * as S from "./style";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({ value, onChange, ...props }) => (
  <S.Input value={value} onChange={({ target }) => onChange(target.value)} {...props} />
);
