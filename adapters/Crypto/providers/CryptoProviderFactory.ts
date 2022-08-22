import { Alchemy } from '../../Crypto/providers/Alchemy';
import { Covalent } from '../../Crypto/providers/Covalent';
import {
  CurrencyProvider,
  NFTProvider,
} from '../../Crypto/providers/CryptoProvider';

export type SupportedProviders = 'covalent' | 'alchemy';

export const getNFTProvider = ({
  provider,
}: {
  provider: SupportedProviders;
}): NFTProvider => {
  switch (provider) {
    case 'alchemy':
      return new Alchemy();
    default:
      throw new Error(`NFT provider ${provider} implementation does not exist`);
  }
};

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
