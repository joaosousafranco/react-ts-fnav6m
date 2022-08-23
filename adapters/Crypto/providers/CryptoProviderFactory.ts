import {
  CryptoChain,
  CryptoNetwork,
} from '../../../domain/models/CryptoNetwork';
import { Alchemy } from '../../Crypto/providers/Alchemy';
import { Covalent } from '../../Crypto/providers/Covalent';
import {
  CurrencyProvider,
  NFTProvider,
} from '../../Crypto/providers/CryptoProvider';
import { MempoolSpace } from '../../Crypto/providers/MempoolSpace';

export const supportedNetworks: CryptoNetwork[] = [
  {
    id: '1',
    name: 'eth-mainnet',
    description: 'ETH Mainnet',
    chain: CryptoChain.ETH,
  },
  {
    id: '42',
    name: 'eth-goerli',
    description: 'ETH Goerli',
    chain: CryptoChain.ETH,
  },
  {
    name: 'btc-mainnet',
    description: 'BTC Mainnet',
    chain: CryptoChain.BTC,
  },
  {
    name: 'btc-testnet',
    description: 'BTC Testnet',
    chain: CryptoChain.BTC,
  },
];

export const getNFTProvider = (): NFTProvider => {
  return new Alchemy();
};

export const getCurrencyProvider = ({
  chain,
}: {
  chain: CryptoChain;
}): CurrencyProvider => {
  switch (chain) {
    case CryptoChain.ETH:
      return new Covalent();
    case CryptoChain.BTC:
      return new MempoolSpace();
    default:
      throw new Error(
        `Crypto currency chain ${chain} implementation does not exist`
      );
  }
};
