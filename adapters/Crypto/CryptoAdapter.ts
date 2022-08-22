import { CryptoCurrency } from '../../domain/models/CryptoCurrency';
import { getCryptoProvider } from '../Crypto/providers/CryptoProviderFactory';

export const getAddressCurrencies = async ({
  address,
}: {
  address: string;
}): Promise<CryptoCurrency[]> => {
  return getCryptoProvider({ provider: 'covalent' }).getAddressCurrencies({
    address,
  });
};
