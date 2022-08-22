import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import cx from 'classnames';
import { Image } from '../../components/Image';
import './Currency.style';
import { AppContext } from '../../app/AppContext';

type CurrencyProps = {
  currency: CryptoCurrency;
};

const LOGO_FALLBACK_IMAGE =
  'https://seeklogo.com/images/W/web3-logo-03377DB11E-seeklogo.com.png';

export const Currency = ({ currency }: CurrencyProps) => {
  const { fiatSymbols } = React.useContext(AppContext);

  const fiatCurrencySymbol = React.useMemo(
    () =>
      fiatSymbols.find((e) => e.abbreviation === currency.fiat.currency)
        ?.symbol,
    [currency]
  );

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
