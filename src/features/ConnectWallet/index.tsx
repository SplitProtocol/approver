import { shortenIfAddress, useEthers } from "@usedapp/core";
import { FC, ReactNode, useEffect, useState } from "react";

import { chains, chainsData } from "@/shared/lib/constants";
import { ArrowIcon } from "@/shared/lib/icons";
import { Button } from "@/shared/ui";

import * as S from "./style";

const getChainDataById = (chainId: number) => {
  switch (chainId) {
    case 56:
      return chainsData.bsc;
    case 137:
      return chainsData.polygon;
    case 43114:
      return chainsData.avalanche;
    case 42161:
      return chainsData.arbitrum;
    case 250:
      return chainsData.fantom;
    case 10:
      return chainsData.optimism;
    case 1:
      return chainsData.ethereum;
    default:
      return null;
  }
};

export const ConnectWallet: FC = () => {
  const { account, activateBrowserWallet, chainId } = useEthers();

  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);
  const [selectedChain, setSelectedChain] = useState<null | { icon: ReactNode; label: string; value: string }>(null);

  useEffect(() => {
    if (chainId && (!selectedChain || +selectedChain.value !== chainId)) {
      setSelectedChain(chains.find((item) => +item.value === chainId) || null);
    }
  }, [chainId, selectedChain]);

  const handleChangeNetwork = async (network: any) => {
    try {
      const chain = getChainDataById(+network.value);

      // @ts-ignore
      await window?.ethereum?.request({
        jsonrpc: "2.0",
        method: "wallet_addEthereumChain",
        params: [chain],
        id: 0,
      });

      setSelectedChain(network);
    } catch (e) {
      console.log(e);
    }
  };

  const handleConnect = () => {
    activateBrowserWallet();
  };

  return (
    <S.Root>
      {account ? (
        <S.UserInfo>
          <S.DropdownWrapper>
            <S.Trigger onClick={() => setIsDropdownOpened((prevState) => !prevState)}>
              {selectedChain?.icon}
              {selectedChain?.label}

              <ArrowIcon />
            </S.Trigger>
            <S.Dropdown isOpened={isDropdownOpened}>
              <S.List>
                {chains.map((item) => (
                  <S.Item>
                    <S.Button onClick={() => handleChangeNetwork(item)}>
                      {item.icon}
                      {item.label}
                    </S.Button>
                  </S.Item>
                ))}
              </S.List>
            </S.Dropdown>
          </S.DropdownWrapper>
          <S.Address>{shortenIfAddress(account)}</S.Address>
        </S.UserInfo>
      ) : (
        <Button onClick={handleConnect}>Connect wallet</Button>
      )}
    </S.Root>
  );
};
