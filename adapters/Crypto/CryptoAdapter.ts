import { CryptoCurrency } from '../../domain/models/CryptoCurrency';
import { CryptoNetwork } from '../../domain/models/CryptoNetwork';
import { NFT } from '../../domain/models/NFT';
import {
  getCurrencyProvider,
  getNFTProvider,
  supportedNetworks,
} from '../Crypto/providers/CryptoProviderFactory';

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
  const provider = getNFTProvider({
    chain: network.chain,
  });

  return provider.getAddressNFTs({ address, network });
};

export const getSupportedNetworks = () => supportedNetworks;
