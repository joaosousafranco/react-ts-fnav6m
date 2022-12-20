import * as React from 'react';
import { NFT as NFTModel } from '../../../domain/models/NFT';
import { Asset } from '../../components/Asset';
import cx from 'classnames';
import './NFT.style';

type NFTProps = {
  nft: NFTModel;
};

export const NFT = ({ nft }: NFTProps) => (
  <div className={cx('nft')}>
    <Asset title={nft.description} src={nft.media[0]} />;
    <div>
      {nft.balance} - {nft.title}
    </div>
  </div>
);
