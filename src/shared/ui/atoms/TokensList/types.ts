interface Token {
  img?: string;
  symbol: string;
  name: string;
  amount?: string;
  address: string;
}

export interface TokensListProps {
  tokens: Token[];
  selectedToken: string;
  onSelect: (value: string) => void;
}
