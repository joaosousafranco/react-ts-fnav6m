import * as React from 'react';
import { CryptoCurrency } from '../../domain/models/CryptoCurrency';
import { AppContext } from '../app/AppContext';

export const Fiat = ({ currency }: { currency: CryptoCurrency }) => {
  const { fiatSymbols } = React.useContext(AppContext);

  const fiatCurrencySymbol = React.useMemo(
    () =>
      fiatSymbols?.find((e) => e.abbreviation === currency.fiat.currency)
        ?.symbol,
    [currency]
  );

  return (
    <div>
      {fiatCurrencySymbol}
      {currency.fiat.value}
    </div>
  );
};
