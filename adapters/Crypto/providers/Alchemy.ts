import { CryptoNetwork } from '../../../domain/models/CryptoNetwork';
import { NFT } from '../../../domain/models/NFT';
import { NFTProvider } from '../../Crypto/providers/CryptoProvider';
import * as HttpAdapter from '../../HttpAdapter';

type AlchemyNFTList = {
  totalCount: number;
  ownedNfts: {
    name: string;
    description: string;
    balance: string;
    image: { cachedUrl: string };
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
      url: `https://${network.name}.g.alchemy.com/nft/v3/${API_KEY}/getNFTsForOwner?owner=${address}`,
    });

    if (error) {
      throw error;
    }

    return (
      body.ownedNfts.map(({ name, description, balance, image }) => ({
        title: name,
        description,
        balance,
        media: [image.cachedUrl],
      })) || []
    );
  }
}
