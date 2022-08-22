import * as React from 'react';
import { CryptoCurrency } from '../../../domain/models/CryptoCurrency';
import cx from 'classnames';
import './Web3Screen.style';
import { useService } from '../../hooks/useService';
import {
  getAddressCurrencies,
  getAddressNFTs,
} from '../../../domain/services/CryptoService';
import { Currency } from '../Web3Screen/Currency';
import { NFT } from '../Web3Screen/NFT';
import { NFT as NFTModel } from '../../../domain/models/NFT';
import { LoadingTitle } from '../../components/LoadingTitle/LoadingTitle';

const INITIAL_ADDRESS = '0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b';
// Address: 0xa49e906f1D52E1c215616f529490F232E22492bA
// Private Key: 36e8e50c25bb1ce42977f227ad992f23afce8d3f2385018f7c73ec3ba2b576e8

// Some useful addresses
// 0x00000000219ab540356cBB839Cbe05303d7705Fa
// 0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b

export const Web3Screen = () => {
  const [address, setAddress] = React.useState(INITIAL_ADDRESS);

  const { fetching: loadingCurrencies, data: currencies } = useService<
    CryptoCurrency[]
  >({ service: () => getAddressCurrencies({ address }) }, [address]);

  const { fetching: loadingNFTs, data: nfts } = useService<NFTModel[]>(
    { service: () => getAddressNFTs({ address }) },
    [address]
  );

  const handleOnTextChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    },
    []
  );

  return (
    <div className={cx('web3Screen')}>
      <input type="text" value={address} onChange={handleOnTextChange} />
      <LoadingTitle title="Address Currencies" loading={loadingCurrencies} />
      {currencies?.map((currency, index) => (
        <Currency key={index} currency={currency} />
      ))}
      <LoadingTitle title="Address NFTs" loading={loadingNFTs} />
      <div className={cx('nfts')}>
        {nfts?.map((nft, index) => (
          <NFT key={index} nft={nft} />
        ))}
      </div>
    </div>
  );
};
