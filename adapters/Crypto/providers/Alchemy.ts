import { NFT } from '../../../domain/models/NFT';
import { NFTProvider } from '../../Crypto/providers/CryptoProvider';
import * as HttpAdapter from '../../HttpAdapter';

// https://eth-goerli.alchemyapi.io/v2/6uKGpq0GacvO_Zv07PIDNjdKAeUuAJY0/getNFTs?owner=0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b

type AlchemyNFTList = {
  totalCount: number;
  ownedNfts: {
    title: string;
    description: string;
    balance: string;
    media: { [key: string]: string }[];
  }[];
};

export class Alchemy implements NFTProvider {
  public async getAddressNFTs({ address }: { address: any }): Promise<NFT[]> {
    const { body, error } = await HttpAdapter.get<AlchemyNFTList>({
      url: `https://eth-goerli.alchemyapi.io/v2/6uKGpq0GacvO_Zv07PIDNjdKAeUuAJY0/getNFTs?owner=${address}`,
    });

    if (error) {
      throw error;
    }

    return body.ownedNfts.map(({ title, description, balance, media }) => ({
      title,
      description,
      balance,
      media: media.reduce(
        (previous, current) =>
          previous.concat(...Object.keys(current).map((key) => current[key])),
        []
      ),
    }));
  }
}
