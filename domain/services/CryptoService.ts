import { CryptoCurrency } from '../models/CryptoCurrency';
import * as CryptoAdapter from '../../adapters/Crypto/CryptoAdapter';

export const getAddressCurrencies = async ({
  address,
}: {
  address: string;
}): Promise<CryptoCurrency[]> => {
  return CryptoAdapter.getAddressCurrencies({ address });
};
