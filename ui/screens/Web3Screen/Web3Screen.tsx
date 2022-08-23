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
import { useDebounce } from '../../hooks/useDebounce';
import { getSupportedNetworks } from '../../../adapters/Crypto/CryptoAdapter';

const INITIAL_ADDRESS = '0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b';
// Address: 0xa49e906f1D52E1c215616f529490F232E22492bA
// Private Key: 36e8e50c25bb1ce42977f227ad992f23afce8d3f2385018f7c73ec3ba2b576e8

// Some useful ethereum addresses
// 0x00000000219ab540356cBB839Cbe05303d7705Fa
// 0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b
// 0xe4605d46fd0b3f8329d936a8b258d69276cba264
// 0xE603eB00619E81d8b4954be13B59D7B6A2DC2B75

// Some useful bitcoin addresses
// mrPnD3hrbJZCMyr2bxoRoumitXLSNvj23V - testnet
// 1AJPvVswhkF1xTmyojgHsioSompZAw1YGf - mainnet

// https://blockchain.info/rawaddr/1AJPvVswhkF1xTmyojgHsioSompZAw1YGf - BTC mainnet
// https://mempool.space/testnet/api/address/mrPnD3hrbJZCMyr2bxoRoumitXLSNvj23V - BTC testnet

export const Web3Screen = () => {
  const [inputValue, setInputValue] = React.useState(INITIAL_ADDRESS);
  const [address, setAddress] = React.useState(INITIAL_ADDRESS);
  const [selectedNetwork, setSelectedNetwork] = React.useState(1);

  const supportedNetworks = React.useMemo(getSupportedNetworks, []);

  const { fetching: loadingCurrencies, data: currencies } = useService<
    CryptoCurrency[]
  >(
    {
      service: () =>
        getAddressCurrencies({
          address,
          network: supportedNetworks[selectedNetwork],
        }),
    },
    [address, selectedNetwork]
  );

  const { fetching: loadingNFTs, data: nfts } = useService<NFTModel[]>(
    {
      service: () =>
        getAddressNFTs({
          address,
          network: supportedNetworks[selectedNetwork],
        }),
    },
    [address, selectedNetwork]
  );

  const handleOnTextChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      debounceOnAddressChange(e);
    },
    []
  );

  const debounceOnAddressChange = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    },
    500
  );

  return (
    <div className={cx('web3Screen')}>
      <div className={cx('input')}>
        <input type="text" value={inputValue} onChange={handleOnTextChange} />
        <select onChange={(e) => setSelectedNetwork(+e.target.value)}>
          {supportedNetworks.map((network, index) => (
            <option selected={selectedNetwork === index} value={index}>
              {network.description}
            </option>
          ))}
        </select>
      </div>
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
