import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import cx from 'classnames';
import { Image } from '../../components/Image';
import { useFetch } from '../../hooks/useFetch';
import './Currency.style';

type CurrencySymbol = {
  currency: string;
  abbreviation: string;
  symbol: string;
};

type CurrencyProps = {
  currency: CryptoCurrency;
};

const CURRENCIES_SYMBOLS_URL =
  'https://gist.githubusercontent.com/nhalstead/4c1652563dd13357ab936fc97703c019/raw/d5de097ef68f37501fb4d06030ca49f10f5f963a/currency-symbols.json';

const LOGO_FALLBACK_IMAGE =
  'https://seeklogo.com/images/W/web3-logo-03377DB11E-seeklogo.com.png';

export const Currency = ({ currency }: CurrencyProps) => {
  const { fetching: loading, data: currenciesSymbols } = useFetch<
    CurrencySymbol[]
  >({ url: CURRENCIES_SYMBOLS_URL }, []);

  if (loading) {
    return null;
  }

  const fiatCurrencySymbol = currenciesSymbols.find(
    (e) => e.abbreviation === currency.fiat.currency
  ).symbol;

  return (
    <div key={currency.symbol} className={cx('currency')}>
      <div className={cx('logo')}>
        <Image src={currency.logo} fallbackImage={LOGO_FALLBACK_IMAGE} />
      </div>
      <div className={cx('description')}>
        {currency.symbol} - {currency.name}
      </div>
      <div className={cx('value')}>
        <div>{currency.balance}</div>
        <div>
          {fiatCurrencySymbol}
          {currency.fiat.value}{' '}
        </div>
      </div>
    </div>
  );
};
