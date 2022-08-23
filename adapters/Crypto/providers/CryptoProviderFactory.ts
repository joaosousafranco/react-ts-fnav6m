import { Alchemy } from '../../Crypto/providers/Alchemy';
import { Covalent } from '../../Crypto/providers/Covalent';
import {
  CurrencyProvider,
  NFTProvider,
} from '../../Crypto/providers/CryptoProvider';
import { MempoolSpace } from '../../Crypto/providers/MempoolSpace';

export type SupportedProviders = 'covalent' | 'alchemy' | 'mempoolspace';

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
    case 'mempoolspace':
      return new MempoolSpace();
    default:
      throw new Error(
        `Crypto currency provider ${provider} implementation does not exist`
      );
  }
};
