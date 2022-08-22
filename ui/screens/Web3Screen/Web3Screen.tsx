import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { useFetch } from '../../hooks/useFetch';
import cx from 'classnames';
import './Web3Screen.style';
import BigNumber from 'bignumber.js';
import { Image } from '../../components/Image';
import { useService } from '../../hooks/useService';
import { getAddressCurrencies } from '../../../domain/services/CryptoService';

const LOGO_FALLBACK_IMAGE =
  'https://seeklogo.com/images/W/web3-logo-03377DB11E-seeklogo.com.png';
const INITIAL_ADDRESS = '0xa49e906f1D52E1c215616f529490F232E22492bA';
// Private Key: 36e8e50c25bb1ce42977f227ad992f23afce8d3f2385018f7c73ec3ba2b576e8

export const Web3Screen = () => {
  const [address, setAddress] = React.useState(INITIAL_ADDRESS);

  const { fetching: loading, data: currencies } = useService<CryptoCurrency[]>(
    async () => await getAddressCurrencies({ address }),
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
      {currencies.map((currency) => (
        <div className={cx('currency')}>
          <div className={cx('logo')}>
            <Image src={currency.logo} fallbackImage={LOGO_FALLBACK_IMAGE} />
          </div>
          <div>
            {currency.symbol} - {currency.name}
          </div>
          <div>Balance: {currency.balance}</div>
        </div>
      ))}
    </div>
  );
};
