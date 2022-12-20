import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import cx from 'classnames';
import { Asset } from '../../components/Asset';
import './Currency.style';
import { Fiat } from '../../components/Fiat';

type CurrencyProps = {
  currency: CryptoCurrency;
};

const LOGO_FALLBACK_IMAGE =
  'https://seeklogo.com/images/W/web3-logo-03377DB11E-seeklogo.com.png';

export const Currency = ({ currency }: CurrencyProps) => (
  <div key={currency.symbol} className={cx('currency')}>
    <div className={cx('logo')}>
      <Asset src={currency.logo} fallbackImage={LOGO_FALLBACK_IMAGE} />
    </div>
    <div className={cx('description')}>{currency.name}</div>
    <div className={cx('value')}>
      <div>
        {currency.balance} {currency.symbol}
      </div>
      {currency.fiat && <Fiat currency={currency} />}
    </div>
  </div>
);
