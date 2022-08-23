type Fiat = {
  value: string;
  currency: string;
};

export type CryptoCurrency = {
  name: string;
  symbol: string;
  balance: string;
  logo: string;
  fiat?: Fiat;
};
