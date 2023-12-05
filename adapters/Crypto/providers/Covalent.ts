import BigNumber from 'bignumber.js';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { CryptoNetwork } from '../../../domain/models/CryptoNetwork';
import { CurrencyProvider } from '../../Crypto/providers/CryptoProvider';
import * as HttpAdapter from '../../HttpAdapter';

type CovalentTokenBalance = {
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  logo_url: string;
  balance: string;
  quote: number;
};

type CovalentBalances = {
  data: {
    address: string;
    quote_currency: string;
    chain_id: number;
    items: CovalentTokenBalance[];
  };
};

const mapEVMCurrency = (
  balance: CovalentTokenBalance,
  quoteCurrency: string
) => ({
  name: balance.contract_name,
  symbol: balance.contract_ticker_symbol,
  // Convert from WEI to Ether
  balance: new BigNumber(balance.balance)
    .dividedBy(new BigNumber('10').pow(18))
    .toString(),
  logo: balance.logo_url,
  fiat: {
    currency: quoteCurrency,
    value: new BigNumber(balance.quote || 0).toString(),
  },
});

const mapUSDC = (balance: CovalentTokenBalance, quoteCurrency: string) => ({
  name: 'USDC',
  symbol: 'USDC',
  balance: new BigNumber(balance.balance)
    .dividedBy(new BigNumber('10').pow(6))
    .toString(),
  logo: balance.logo_url,
  fiat: {
    currency: quoteCurrency,
    value: new BigNumber(balance.quote || 0).toString(),
  },
});

export class Covalent implements CurrencyProvider {
  public async getAddressCurrencies({
    address,
    network,
  }: {
    address: string;
    network: CryptoNetwork;
  }): Promise<CryptoCurrency[]> {
    const { body, error } = await HttpAdapter.get<CovalentBalances>({
      url: `https://api.covalenthq.com/v1/${network.id}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=cqt_rQVQD4Tgg6TRv6wRKCXJMgWVyrJD`,
    });

    if (error) {
      throw error;
    }

    return (
      body?.data?.items?.map((item) =>
        item.contract_name
          ? mapEVMCurrency(item, body.data.quote_currency)
          : mapUSDC(item, body.data.quote_currency)
      ) || []
    );
  }
}
