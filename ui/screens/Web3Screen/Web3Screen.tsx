import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { useFetch } from '../../hooks/useFetch';
import cx from 'classnames';
import './Web3Screen.style';

// 0xa49e906f1D52E1c215616f529490F232E22492bA
// 36e8e50c25bb1ce42977f227ad992f23afce8d3f2385018f7c73ec3ba2b576e8

// Covalent API Key: ckey_67e96b9a39f24af5a1814748722
// https://api.covalenthq.com/v1/42/address/0xa49e906f1D52E1c215616f529490F232E22492bA/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_67e96b9a39f24af5a1814748722

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
    }[];
  };
};

export const Web3Screen = () => {
  const { fetching: loading, data } = useFetch<CovalentBalances>(
    {
      url: 'https://api.covalenthq.com/v1/42/address/0xa49e906f1D52E1c215616f529490F232E22492bA/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_67e96b9a39f24af5a1814748722',
    },
    []
  );

  const currencies: CryptoCurrency[] = React.useMemo((): CryptoCurrency[] => {
    if (!data || loading) {
      return [];
    }

    return data.data.items.map((item) => ({
      name: item.contract_name,
      symbol: item.contract_ticker_symbol,
      balance: 0,
      logo: item.logo_url,
    }));
  }, [data]);

  if (loading) {
    return <div>Loading Crypto Currencies</div>;
  }

  return currencies.map((currency) => (
    <div className={cx('web3Screen')}>
      <img src={currency.logo} width={100} />
      <div>
        {currency.symbol} - {currency.name}
      </div>
      <div>Balance: {currency.balance}</div>
    </div>
  ));
};
