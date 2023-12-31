export interface Token {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
  balance?: string;
}

export interface GetTokensByChainIdResponse {
  tokens: Record<string, Token>;
}
