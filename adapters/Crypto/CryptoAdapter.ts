import { CryptoCurrency } from '../../domain/models/CryptoCurrency';
import { NFT } from '../../domain/models/NFT';
import {
  getCurrencyProvider,
  getNFTProvider,
} from '../Crypto/providers/CryptoProviderFactory';

export const getAddressCurrencies = async ({
  address,
}: {
  address: string;
}): Promise<CryptoCurrency[]> => {
  const provider = getCurrencyProvider({
    provider: 'covalent',
  });

  return provider.getAddressCurrencies({ address });
};

export const getAddressNFTs = async ({
  address,
}: {
  address: string;
}): Promise<NFT[]> => {
  const provider = getNFTProvider({
    provider: 'alchemy',
  });

  return provider.getAddressNFTs({ address });
};
