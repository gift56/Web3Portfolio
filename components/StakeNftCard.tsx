import { NFT } from "@thirdweb-dev/sdk";

type NFTProps = {
  nft: NFT;
};

const StakeNftCard = ({ nft }: NFTProps) => {
  return <div className={styles.card}>StakeNftCard</div>;
};

export default StakeNftCard;
