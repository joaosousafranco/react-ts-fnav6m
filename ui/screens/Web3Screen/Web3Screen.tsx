import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import { useFetch } from '../../hooks/useFetch';
import cx from 'classnames';
import './Web3Screen.style';
import BigNumber from 'bignumber.js';
import { Image } from '../../components/Image';
import { useService } from '../../hooks/useService';
import { getAddressCurrencies } from '../../../domain/services/CryptoService';
// 0xa49e906f1D52E1c215616f529490F232E22492bA
// 36e8e50c25bb1ce42977f227ad992f23afce8d3f2385018f7c73ec3ba2b576e8

// Covalent API Key: ckey_67e96b9a39f24af5a1814748722
// https://api.covalenthq.com/v1/42/address/0xa49e906f1D52E1c215616f529490F232E22492bA/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_67e96b9a39f24af5a1814748722

export const Web3Screen = () => {
  const [address, setAddress] = React.useState(
    '0xa49e906f1D52E1c215616f529490F232E22492bA'
  );

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
            <Image
              src={currency.logo}
              fallbackImage="https://seeklogo.com/images/W/web3-logo-03377DB11E-seeklogo.com.png"
            />
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
