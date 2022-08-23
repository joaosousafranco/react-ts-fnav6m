import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { CryptoNetwork } from '../../../domain/models/CryptoNetwork';
import { NFT } from '../../../domain/models/NFT';

export interface NFTProvider {
  getAddressNFTs(options: {
    address: string;
    network: CryptoNetwork;
  }): Promise<NFT[]>;
}

export interface CurrencyProvider {
  getAddressCurrencies(options: {
    address: string;
    network: CryptoNetwork;
  }): Promise<CryptoCurrency[]>;
}
