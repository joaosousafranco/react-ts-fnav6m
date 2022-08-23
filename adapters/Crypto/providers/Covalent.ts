import BigNumber from 'bignumber.js';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { CryptoNetwork } from '../../../domain/models/CryptoNetwork';
import { CurrencyProvider } from '../../Crypto/providers/CryptoProvider';
import * as HttpAdapter from '../../HttpAdapter';

type CovalentBalances = {
  data: {
    address: string;
    quote_currency: string;
    chain_id: number;
    items: {
      contract_name: string;
      contract_ticker_symbol: string;
      contract_address: string;
      logo_url: string;
      balance: string;
      quote: number;
    }[];
  };
};

export class Covalent implements CurrencyProvider {
  public async getAddressCurrencies({
    address,
    network,
  }: {
    address: string;
    network: CryptoNetwork;
  }): Promise<CryptoCurrency[]> {
    const { body, error } = await HttpAdapter.get<CovalentBalances>({
      url: `https://api.covalenthq.com/v1/${network.id}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_67e96b9a39f24af5a1814748722`,
    });

    if (error) {
      throw error;
    }

    return (
      body?.data?.items?.map((item) => ({
        name: item.contract_name,
        symbol: item.contract_ticker_symbol,
        // Convert from WEI to Ether
        balance: new BigNumber(item.balance)
          .dividedBy(new BigNumber('10').pow(18))
          .toString(),
        logo: item.logo_url,
        fiat: {
          currency: body.data.quote_currency,
          value: new BigNumber(item.quote).toString(),
        },
      })) || []
    );
  }
}
