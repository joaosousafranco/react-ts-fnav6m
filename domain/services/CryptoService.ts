import BigNumber from 'bignumber.js';
import { CryptoCurrency } from '../models/CryptoCurrency';

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
    }[];
  };
};

export const getAddressCurrencies = async ({
  address,
}: {
  address: string;
}): Promise<CryptoCurrency[]> => {
  return getAddressCurrencies({ address });
};
