import * as React from 'react';
import { NFT as NFTModel } from '../../../domain/models/NFT';
import { Image } from '../../components/Image';
import cx from 'classnames';
import './NFT.style';

type NFTProps = {
  nft: NFTModel;
};

export const NFT = ({ nft }: NFTProps) => (
  <div className={cx('nft')}>
    <Image
      title={nft.description}
      src={nft.media[0]}
      fallbackImage={nft.media[1]}
    />
    <div>
      {nft.balance} - {nft.title}
    </div>
  </div>
);
