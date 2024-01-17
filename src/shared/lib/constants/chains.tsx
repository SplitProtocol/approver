import {
  ArbitrumLogo,
  AvalancheLogo,
  BSCLogo,
  DaiLogo,
  EthereumLogo,
  FantomLogo,
  PolygonLogo,
  UsdcLogo,
  UsdtLogo,
  WbtcLogo,
} from "../icons";

export const chainsData = {
  polygon: {
    chainId: "0x89",
    chainName: "Split Polygon",
    rpcUrls: ["https://rpc.splitex.app/http/polygon"],
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
    rpcUrls: ["https://rpc.splitex.app/http/arbitrum"],
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
    rpcUrls: ["https://rpc.splitex.app/http/bsc"],
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
    rpcUrls: ["https://rpc.splitex.app/http/avalanche"],
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
    rpcUrls: ["https://rpc.splitex.app/http/fantom"],
    nativeCurrency: {
      name: "FTM",
      symbol: "FTM",
      decimals: 18,
    },
    blockExplorerUrls: ["https://ftmscan.com/"],
  },
  ethereum: {
    chainId: "0x1",
    chainName: "Split Ethereum",
    rpcUrls: ["https://rpc.splitex.app/http/eth"],
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
    label: "BSC Mainnet",
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
];

export const commonTokens = {
  ch1: [
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
  ],
  ch56: [
    {
      symbol: "USDT",
      logo: <UsdtLogo />,
      address: "0x0a70dDf7cDBa3E8b6277C9DDcAf2185e8B6f539f",
    },
    {
      symbol: "USDC",
      logo: <UsdcLogo />,
      address: "0xB04906e95AB5D797aDA81508115611fee694c2b3",
    },
    {
      symbol: "ETH",
      logo: <img src="/assets/img/eth-1.png" alt="" width={25} />,
      address: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA",
    },
    {
      symbol: "BTCB",
      logo: <WbtcLogo />,
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    },
    {
      symbol: "DAI",
      logo: <DaiLogo />,
      address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    },
    {
      symbol: "WBNB",
      logo: <BSCLogo />,
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
  ],
  ch137: [
    {
      symbol: "USDT",
      logo: <UsdtLogo />,
      address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    },
    {
      symbol: "USDC",
      logo: <UsdcLogo />,
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    },
    {
      symbol: "WETH",
      logo: <EthereumLogo />,
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    },
    {
      symbol: "WBTC",
      logo: <WbtcLogo />,
      address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    },
    {
      symbol: "DAI",
      logo: <DaiLogo />,
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    },
    {
      symbol: "WMATIC",
      logo: <PolygonLogo />,
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    },
  ],
  ch43114: [
    {
      symbol: "USDT",
      logo: <UsdtLogo />,
      address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    },
    {
      symbol: "USDC",
      logo: <UsdcLogo />,
      address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    {
      symbol: "WETH",
      logo: <EthereumLogo />,
      address: "0x8b82A291F83ca07Af22120ABa21632088fC92931",
    },
    {
      symbol: "USDT.e",
      logo: <UsdtLogo />,
      address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    },
    {
      symbol: "USDC.e",
      logo: <UsdcLogo />,
      address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    },
    {
      symbol: "WETH.e",
      logo: <EthereumLogo />,
      address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    },
    {
      symbol: "WBTC.e",
      logo: <WbtcLogo />,
      address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
    },
    {
      symbol: "DAI.e",
      logo: <DaiLogo />,
      address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    },
    {
      symbol: "WAVAX",
      logo: <AvalancheLogo />,
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    },
  ],
  ch42161: [
    {
      symbol: "USDT",
      logo: <UsdtLogo />,
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    },
    {
      symbol: "USDC",
      logo: <UsdcLogo />,
      address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    {
      symbol: "WETH",
      logo: <EthereumLogo />,
      address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    },
    {
      symbol: "WBTC",
      logo: <WbtcLogo />,
      address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    },
    {
      symbol: "DAI",
      logo: <DaiLogo />,
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    },
    {
      symbol: "ARB",
      logo: <ArbitrumLogo />,
      address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    },
  ],
  ch250: [
    {
      symbol: "USDT",
      logo: <UsdtLogo />,
      address: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
    },
    {
      symbol: "USDC",
      logo: <UsdcLogo />,
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    },
    {
      symbol: "ETH",
      logo: <EthereumLogo />,
      address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
    },
    {
      symbol: "BTC",
      logo: <WbtcLogo />,
      address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    },
    {
      symbol: "DAI",
      logo: <DaiLogo />,
      address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    },
    {
      symbol: "WFTM",
      logo: <FantomLogo />,
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    },
  ],
};
