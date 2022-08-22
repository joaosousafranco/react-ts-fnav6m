import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { NFT } from '../../../domain/models/NFT';

export interface NFTProvider {
  getAddressNFTs({ address: string }): Promise<NFT[]>;
}

export interface CurrencyProvider {
  getAddressCurrencies({ address: string }): Promise<CryptoCurrency[]>;
}
