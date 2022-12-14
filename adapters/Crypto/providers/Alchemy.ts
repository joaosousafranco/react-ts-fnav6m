import { CryptoNetwork } from '../../../domain/models/CryptoNetwork';
import { NFT } from '../../../domain/models/NFT';
import { NFTProvider } from '../../Crypto/providers/CryptoProvider';
import * as HttpAdapter from '../../HttpAdapter';

type AlchemyNFTList = {
  totalCount: number;
  ownedNfts: {
    title: string;
    description: string;
    balance: string;
    media: { [key: string]: string }[];
  }[];
};

const API_KEY = 'HBz1o0OVpF0qAaek-2jGJf3JWoi7Jrql';

export class Alchemy implements NFTProvider {
  public async getAddressNFTs({
    address,
    network,
  }: {
    address: string;
    network: CryptoNetwork;
  }): Promise<NFT[]> {
    const { body, error } = await HttpAdapter.get<AlchemyNFTList>({
      url: `https://${network.name}.g.alchemy.com/nft/v2/${API_KEY}/getNFTs?owner=${address}`,
    });

    if (error) {
      throw error;
    }

    return (
      body.ownedNfts.map(({ title, description, balance, media }) => ({
        title,
        description,
        balance,
        media: media.reduce(
          (previous, current) =>
            previous.concat(...Object.keys(current).map((key) => current[key])),
          []
        ),
      })) || []
    );
  }
}
