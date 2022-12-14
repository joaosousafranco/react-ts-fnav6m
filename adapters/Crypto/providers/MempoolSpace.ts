import BigNumber from 'bignumber.js';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { CryptoNetwork } from '../../../domain/models/CryptoNetwork';
import { CurrencyProvider } from '../../Crypto/providers/CryptoProvider';
import * as HttpAdapter from '../../HttpAdapter';

const BTC_LOGO = 'https://bitcoin.org/img/icons/opengraph.png?1660986466';

type MempoolSpaceBalance = {
  address: string;
  chain_stats: {
    funded_txo_sum: number;
  };
};

const NETWORKS_BASE_URL_MAP = {
  'btc-testnet': 'https://mempool.space/testnet',
  'btc-mainnet': 'https://mempool.space',
};

export class MempoolSpace implements CurrencyProvider {
  public async getAddressCurrencies({
    address,
    network,
  }: {
    address: string;
    network: CryptoNetwork;
  }): Promise<CryptoCurrency[]> {
    const { body, error } = await HttpAdapter.get<MempoolSpaceBalance>({
      url: `${NETWORKS_BASE_URL_MAP[network.name]}/api/address/${address}`,
    });

    if (error) {
      throw error;
    }

    return [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        // Convert from SATOSHI to BTC
        balance: new BigNumber(body.chain_stats.funded_txo_sum)
          .dividedBy(new BigNumber('10').pow(7))
          .toString(),
        logo: BTC_LOGO,
      },
    ];
  }
}
