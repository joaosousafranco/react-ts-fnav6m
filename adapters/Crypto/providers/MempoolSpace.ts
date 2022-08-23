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

export class MempoolSpace implements CurrencyProvider {
  public async getAddressCurrencies({
    address,
    network,
  }: {
    address: string;
    network: CryptoNetwork;
  }): Promise<CryptoCurrency[]> {
    const networkName = network.name === 'btc-testnet' ? 'testnet/' : '';

    const { body, error } = await HttpAdapter.get<MempoolSpaceBalance>({
      url: `https://mempool.space/${networkName}api/address/${address}`,
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
