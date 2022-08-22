import { Covalent } from '../../Crypto/providers/Covalent';
import { CryptoProvider } from '../../Crypto/providers/CryptoProvider';

export type SupportedProviders = 'covalent' | 'alchemy';

export const getCryptoProvider = ({
  provider,
}: {
  provider: SupportedProviders;
}): CryptoProvider => {
  switch (provider) {
    case 'covalent':
      return new Covalent();
    default:
      throw new Error(
        `Crypto provider ${provider} implementation does not exist`
      );
  }
};
