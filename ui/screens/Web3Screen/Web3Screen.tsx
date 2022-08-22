import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import cx from 'classnames';
import './Web3Screen.style';
import { Image } from '../../components/Image';
import { useService } from '../../hooks/useService';
import { getAddressCurrencies } from '../../../domain/services/CryptoService';
import { useFetch } from '../../hooks/useFetch';
import { Currency } from '../Web3Screen/Currency';

const INITIAL_ADDRESS = '0xa49e906f1D52E1c215616f529490F232E22492bA';
// Private Key: 36e8e50c25bb1ce42977f227ad992f23afce8d3f2385018f7c73ec3ba2b576e8

// Some useful addresses
// 0x00000000219ab540356cBB839Cbe05303d7705Fa

export const Web3Screen = () => {
  const [address, setAddress] = React.useState(INITIAL_ADDRESS);

  const { fetching: loading, data: currencies } = useService<CryptoCurrency[]>(
    () => getAddressCurrencies({ address }),
    [address]
  );

  if (loading) {
    return <div>Loading Crypto Currencies</div>;
  }

  return (
    <div className={cx('web3Screen')}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <h1>Address Currencies</h1>
      {currencies.map((currency) => (
        <Currency key={currency.symbol} currency={currency} />
      ))}
    </div>
  );
};
