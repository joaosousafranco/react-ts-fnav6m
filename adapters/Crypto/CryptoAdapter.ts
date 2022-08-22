import { CryptoCurrency } from '../../domain/models/CryptoCurrency';
import { CurrencyProvider } from '../Crypto/providers/CryptoProvider';
import { getCryptoProvider } from '../Crypto/providers/CryptoProviderFactory';

export const getAddressCurrencies = async ({
  address,
}: {
  address: string;
}): Promise<CryptoCurrency[]> => {
  const provider = getCryptoProvider({
    provider: 'covalent',
  });

  return provider.getAddressCurrencies({ address });
};
