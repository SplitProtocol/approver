import { ArbitrumLogo, AvalancheLogo, BSCLogo, EthereumLogo, FantomLogo, OptimismLogo, PolygonLogo } from "../icons";

export const chainsData = {
  polygon: {
    chainId: "0x89",
    chainName: "Split Polygon",
    rpcUrls: ["https://splitrouter.io/http/polygon"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  arbitrum: {
    chainId: "0xa4b1",
    chainName: "Split Arbitrum",
    rpcUrls: ["https://splitrouter.io/http/arbitrum"],
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://arbiscan.io/"],
  },
  bsc: {
    chainId: "0x38",
    chainName: "Split BSC",
    rpcUrls: ["https://splitrouter.io/http/bsc"],
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  avalanche: {
    chainId: "0xa86a",
    chainName: "Split Avalanche",
    rpcUrls: ["https://splitrouter.io/http/avalanche"],
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    blockExplorerUrls: ["https://snowtrace.io"],
  },
  fantom: {
    chainId: "0xfa",
    chainName: "Split Fantom",
    rpcUrls: ["https://splitrouter.io/http/fantom"],
    nativeCurrency: {
      name: "FTM",
      symbol: "FTM",
      decimals: 18,
    },
    blockExplorerUrls: ["https://ftmscan.com/"],
  },
  optimism: {
    chainId: "0xa",
    chainName: "Split Optimism",
    rpcUrls: ["https://splitrouter.io/http/optimism"],
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://optimistic.etherscan.io/"],
  },
  ethereum: {
    chainId: "0x1",
    chainName: "Split Ethereum",
    rpcUrls: ["https://splitrouter.io/http/eth"],
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://etherscan.io/"],
  },
};

export const chains = [
  {
    value: "1",
    label: "Ethereum",
    icon: <EthereumLogo />,
  },
  {
    value: "56",
    label: "BCS Mainnet",
    icon: <BSCLogo />,
  },
  {
    value: "137",
    label: "Polygon",
    icon: <PolygonLogo />,
  },
  {
    value: "43114",
    label: "Avalanche",
    icon: <AvalancheLogo />,
  },
  {
    value: "42161",
    label: "Arbitrum",
    icon: <ArbitrumLogo />,
  },
  {
    value: "250",
    label: "Fantom",
    icon: <FantomLogo />,
  },
  {
    value: "10",
    label: "Optimism",
    icon: <OptimismLogo />,
  },
];
