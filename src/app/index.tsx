import "../../public/style.css";

import { DAppProvider } from "@usedapp/core";
import { FC } from "react";

import { dappConfig } from "@/shared/lib/config";
import { setupGlobalStyles } from "@/shared/lib/styles";
import { Header } from "@/widgets";

import * as S from "./style";
import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => {
  setupGlobalStyles();

  return (
    <DAppProvider config={dappConfig}>
      <Header />

      <S.Main>{children}</S.Main>
    </DAppProvider>
  );
};
