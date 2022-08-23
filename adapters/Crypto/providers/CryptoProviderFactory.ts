import { CryptoChain } from '../../../domain/models/CryptoNetwork';
import { Alchemy } from '../../Crypto/providers/Alchemy';
import { Covalent } from '../../Crypto/providers/Covalent';
import {
  CurrencyProvider,
  NFTProvider,
} from '../../Crypto/providers/CryptoProvider';
import { MempoolSpace } from '../../Crypto/providers/MempoolSpace';

export const getNFTProvider = (): NFTProvider => {
  return new Alchemy();
};

export const getCurrencyProvider = ({
  chain,
}: {
  chain: CryptoChain;
}): CurrencyProvider => {
  switch (chain) {
    case CryptoChain.ETH:
      return new Covalent();
    case CryptoChain.BTC:
      return new MempoolSpace();
    default:
      throw new Error(
        `Crypto currency chain ${chain} implementation does not exist`
      );
  }
};
