/* eslint-disable react/no-array-index-key */
import { FC } from "react";

import * as S from "./style";
import { TokensListProps } from "./types";

export const TokensList: FC<TokensListProps> = ({ tokens, selectedToken, onSelect }) => (
  <S.TokensList>
    {tokens.map(({ img, name, amount, symbol, address }, index) => (
      <S.Token
        key={`${name}-${img}-${index}`}
        selected={selectedToken === address}
        onClick={() => (selectedToken === address ? onSelect("") : onSelect(address))}
      >
        <S.TokenInfo>
          <S.TokenImg src={img} alt={symbol} />
          <S.TokenWrapper>
            <S.TokenSymbol>{symbol}</S.TokenSymbol>
            <S.TokenName>{name}</S.TokenName>
          </S.TokenWrapper>
        </S.TokenInfo>
        <S.TokenPrice>{amount}</S.TokenPrice>
      </S.Token>
    ))}
  </S.TokensList>
);
