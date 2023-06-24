import { FC } from "react";

import { ConnectWallet } from "@/features";
import { SplitLogo } from "@/shared/lib/icons";
import { Container } from "@/shared/ui";

import * as S from "./style";

export const Header: FC = () => (
  <S.Header>
    <Container>
      <S.Logo>
        <SplitLogo />
      </S.Logo>
      <S.ConnectWallet>
        <ConnectWallet />
      </S.ConnectWallet>
    </Container>
  </S.Header>
);
