import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';

export interface CryptoProvider {
  getAddressCurrencies({ address: string }): Promise<CryptoCurrency[]>;
}
