export enum CryptoChain {
  ETH = 'ethereum',
  BTC = 'bitcoin',
}

export type CryptoNetwork = {
  id?: string;
  name?: string;
  description?: string;
  chain: CryptoChain;
};
