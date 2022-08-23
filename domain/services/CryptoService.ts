import { CryptoCurrency } from '../models/CryptoCurrency';
import * as CryptoAdapter from '../../adapters/Crypto/CryptoAdapter';
import { NFT } from '../models/NFT';
import { CryptoNetwork } from '../models/CryptoNetwork';

export const getAddressCurrencies = async ({
  address,
  network,
}: {
  address: string;
  network: CryptoNetwork;
}): Promise<CryptoCurrency[]> => {
  return CryptoAdapter.getAddressCurrencies({ address, network });
};

export const getAddressNFTs = async ({
  address,
  network,
}: {
  address: string;
  network: CryptoNetwork;
}): Promise<NFT[]> => {
  return CryptoAdapter.getAddressNFTs({ address, network });
};

export const getSupportedNetworks = () => {
  return CryptoAdapter.getSupportedNetworks();
};
