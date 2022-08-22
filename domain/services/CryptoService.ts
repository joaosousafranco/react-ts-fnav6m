import { CryptoCurrency } from '../models/CryptoCurrency';
import * as CryptoAdapter from '../../adapters/Crypto/CryptoAdapter';
import { NFT } from '../models/NFT';

export const getAddressCurrencies = async ({
  address,
}: {
  address: string;
}): Promise<CryptoCurrency[]> => {
  return CryptoAdapter.getAddressCurrencies({ address });
};

export const getAddressNFTs = async ({
  address,
}: {
  address: string;
}): Promise<NFT[]> => {
  return CryptoAdapter.getAddressNFTs({ address });
};
