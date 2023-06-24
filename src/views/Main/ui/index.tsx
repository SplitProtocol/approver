import { FC } from "react";

import { Container } from "@/shared/ui";

import * as S from "./style";

export const MainPage: FC = () => (
  <S.Root>
    <Container>
      <S.Block>
        <S.Title>Select a Token</S.Title>
      </S.Block>
    </Container>
  </S.Root>
);
