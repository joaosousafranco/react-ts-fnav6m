import BigNumber from 'bignumber.js';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { CryptoNetwork } from '../../../domain/models/CryptoNetwork';
import { CurrencyProvider } from '../../Crypto/providers/CryptoProvider';
import * as HttpAdapter from '../../HttpAdapter';

const DOGE_LOGO =
  'https://cryptologos.cc/logos/versions/dogecoin-doge-logo-alternative.svg?v=023';

const NETWORKS_BASE_URL_MAP = {
  'dogecoin-mainnet': 'https://api.blockcypher.com/v1/doge',
};

type DogecoinBalance = {
  address: string;
  final_balance: number;
};

export class Dogecoin implements CurrencyProvider {
  public async getAddressCurrencies({
    address,
    network,
  }: {
    address: string;
    network: CryptoNetwork;
  }): Promise<CryptoCurrency[]> {
    const { body, error } = await HttpAdapter.get<DogecoinBalance>({
      url: `${
        NETWORKS_BASE_URL_MAP[network.name]
      }/main/addrs/${address}?token=3e67c4622635454eaf942b83bff6b369`,
    });

    if (error) {
      throw error;
    }

    return [
      {
        name: 'Dogecoin',
        symbol: 'Ɖ',
        balance: new BigNumber(body.final_balance)
          .dividedBy(100000000)
          .toString(),
        logo: DOGE_LOGO,
      },
    ];
  }
}
