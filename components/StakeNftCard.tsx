import { NFT } from "@thirdweb-dev/sdk";
import styles from "../styles/Home.module.css";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";

type NFTProps = {
  nft: NFT;
};

const StakeNftCard = ({ nft }: NFTProps) => {
  return (
    <div className={styles.card}>
      <ThirdwebNftMedia metadata={nft.metadata} />
      <div className={styles.cardText}>
        <h2 className={styles.gradientText1}>{nft.metadata.name}</h2>
        <p>Token ID#{nft.metadata.id}</p>
      </div>
    </div>
  );
};

export default StakeNftCard;
