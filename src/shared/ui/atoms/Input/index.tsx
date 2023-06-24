import { FC } from "react";

import * as S from "./style";
import { InputProps } from "./types";

export const Input: FC<InputProps> = (props) => <S.Input {...props} />;
