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
import { Dogecoin } from '../../Crypto/providers/Dogecoin';
import { MempoolSpace } from '../../Crypto/providers/MempoolSpace';

export const supportedNetworks: CryptoNetwork[] = [
  {
    id: '1',
    name: 'eth-mainnet',
    description: 'ETH Mainnet',
    chain: CryptoChain.ETH,
  },
  {
    id: '5',
    name: 'eth-goerli',
    description: 'ETH Goerli',
    chain: CryptoChain.ETH,
  },
  {
    id: '137',
    name: 'polygon-mainnet',
    description: 'Polygon Mainnet',
    chain: CryptoChain.MATIC,
  },
  {
    id: '80001',
    name: 'polygon-mumbai',
    description: 'Polygon Mumbai',
    chain: CryptoChain.MATIC,
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
  {
    name: 'dogecoin-mainnet',
    description: 'Dogecoin Mainnet',
    chain: CryptoChain.DOGE,
  },
];

export const getNFTProvider = ({
  chain,
}: {
  chain: CryptoChain;
}): NFTProvider => {
  switch (chain) {
    case CryptoChain.ETH:
    case CryptoChain.MATIC:
      return new Alchemy();
    default:
      throw new Error(`NFT chain ${chain} implementation does not exist`);
  }
};

export const getCurrencyProvider = ({
  chain,
}: {
  chain: CryptoChain;
}): CurrencyProvider => {
  switch (chain) {
    case CryptoChain.ETH:
    case CryptoChain.MATIC:
      return new Covalent();
    case CryptoChain.BTC:
      return new MempoolSpace();
    case CryptoChain.DOGE:
      return new Dogecoin();
    default:
      throw new Error(
        `Crypto currency chain ${chain} implementation does not exist`
      );
  }
};
