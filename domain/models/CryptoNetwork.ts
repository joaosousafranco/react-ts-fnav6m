export enum CryptoChain {
  ETH = 'ethereum',
  BTC = 'bitcoin',
  DOGE = 'dogecoin',
}

export type CryptoNetwork = {
  id?: string;
  name?: string;
  description?: string;
  chain: CryptoChain;
};
