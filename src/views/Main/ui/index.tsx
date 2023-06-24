import { FC } from "react";

import { Button, Container, Input, TokensList } from "@/shared/ui";

import * as S from "./style";

const TOKENS = [
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 0.002234,
    img: "https://place-hold.it/25x25",
  },
  {
    name: "Ethereu",
    symbol: "ETH",
    price: 0.00224,
    img: "https://place-hold.it/25x25",
  },
  {
    name: "Etereum",
    symbol: "ETH",
    price: 0.02234,
    img: "https://place-hold.it/25x25",
  },
  {
    name: "Ehereum",
    symbol: "ETH",
    price: 0.00234,
    img: "https://place-hold.it/25x25",
  },
];

export const MainPage: FC = () => (
  <S.Root>
    <Container>
      <S.Block>
        <S.Title>Select a Token</S.Title>
        <S.Search>
          <Input placeholder="Search name or paste address" />
        </S.Search>

        <S.Tokens>
          <S.TokensTitle>Common tokens</S.TokensTitle>
          <S.TokensList>
            <S.TokensItem>
              <S.TokensImg src="https://place-hold.it/25x25" />
              USDT
            </S.TokensItem>
            <S.TokensItem>
              <S.TokensImg src="https://place-hold.it/25x25" />
              USDT
            </S.TokensItem>
            <S.TokensItem>
              <S.TokensImg src="https://place-hold.it/25x25" />
              USDT
            </S.TokensItem>
            <S.TokensItem>
              <S.TokensImg src="https://place-hold.it/25x25" />
              USDT
            </S.TokensItem>
            <S.TokensItem>
              <S.TokensImg src="https://place-hold.it/25x25" />
              USDT
            </S.TokensItem>
            <S.TokensItem>
              <S.TokensImg src="https://place-hold.it/25x25" />
              USDT
            </S.TokensItem>
          </S.TokensList>
        </S.Tokens>

        <TokensList tokens={TOKENS} />

        <S.SubmitButton>
          <Button stretch size="large">
            Give permission to WBNB
          </Button>
        </S.SubmitButton>
      </S.Block>
    </Container>
  </S.Root>
);
