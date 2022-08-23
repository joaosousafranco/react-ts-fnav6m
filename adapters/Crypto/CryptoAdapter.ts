import { CryptoCurrency } from '../../domain/models/CryptoCurrency';
import { CryptoNetwork } from '../../domain/models/CryptoNetwork';
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
  },
  {
    id: '42',
    name: 'eth-goerli',
    description: 'ETH Goerli',
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
    provider: 'covalent',
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
  const provider = getNFTProvider({
    provider: 'alchemy',
  });

  return provider.getAddressNFTs({ address, network });
};

export const getSupportedNetworks = () => supportedNetworks;
