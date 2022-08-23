import { CryptoCurrency } from '../../domain/models/CryptoCurrency';
import { CryptoChain, CryptoNetwork } from '../../domain/models/CryptoNetwork';
import { NFT } from '../../domain/models/NFT';
import {
  getCurrencyProvider,
  getNFTProvider,
} from '../Crypto/providers/CryptoProviderFactory';

const supportedNetworks: CryptoNetwork[] = [
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

export const getAddressCurrencies = async ({
  address,
  network,
}: {
  address: string;
  network: CryptoNetwork;
}): Promise<CryptoCurrency[]> => {
  const provider = getCurrencyProvider({
    chain: network.chain,
  });

  return provider.getAddressCurrencies({ address, network });
};

export const getAddressNFTs = async ({
  address,
  network,
}: {
  address: string;
  network: CryptoNetwork;
}): Promise<NFT[]> => {
  const provider = getNFTProvider();

  return provider.getAddressNFTs({ address, network });
};

export const getSupportedNetworks = () => supportedNetworks;
