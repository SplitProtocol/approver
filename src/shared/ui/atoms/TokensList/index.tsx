import { FC } from "react";

import * as S from "./style";
import { TokensListProps } from "./types";

export const TokensList: FC<TokensListProps> = ({ tokens }) => (
  <S.TokensList>
    {tokens.map(({ img, name, price, symbol }) => (
      <S.Token key={`${name}-${price}`}>
        <S.TokenInfo>
          <S.TokenImg src={img} alt={symbol} />
          <S.TokenWrapper>
            <S.TokenSymbol>{symbol}</S.TokenSymbol>
            <S.TokenName>{name}</S.TokenName>
          </S.TokenWrapper>
        </S.TokenInfo>
        <S.TokenPrice>{price}</S.TokenPrice>
      </S.Token>
    ))}
  </S.TokensList>
);
