import { Covalent } from '../../Crypto/providers/Covalent';
import { CurrencyProvider } from '../../Crypto/providers/CryptoProvider';

export type SupportedProviders = 'covalent' | 'alchemy';

export const getCurrencyProvider = ({
  provider,
}: {
  provider: SupportedProviders;
}): CurrencyProvider => {
  switch (provider) {
    case 'covalent':
      return new Covalent();
    default:
      throw new Error(
        `Crypto currency provider ${provider} implementation does not exist`
      );
  }
};
