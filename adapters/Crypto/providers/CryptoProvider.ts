import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';

export interface NFTProvider {
  getAddressNFTs({ address: string }): Promise<CryptoCurrency[]>;
}

export interface CurrencyProvider {
  getAddressCurrencies({ address: string }): Promise<CryptoCurrency[]>;
}
