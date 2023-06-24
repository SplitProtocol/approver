interface Token {
  img: string;
  symbol: string;
  name: string;
  price: number;
}

export interface TokensListProps {
  tokens: Token[];
}
