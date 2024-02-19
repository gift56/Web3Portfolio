import {
  ThirdwebNftMedia,
  Web3Button,
  useContract,
  useNFT,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import {
  ERC721_CONTRACT_ADDRESS,
  STAKING_CONTRACT_ADDRESS,
} from "../constants/addresses";

type NftProps = { tokenId: number };

const StakedNftCard = ({ tokenId }: NftProps) => {
  const { contract: ERC721Contract } = useContract(
    ERC721_CONTRACT_ADDRESS,
    "nft-drop"
  );

  const { contract: StakingContract } = useContract(STAKING_CONTRACT_ADDRESS);

  const { data: nftData, isLoading: isLoadingNftData } = useNFT(
    ERC721Contract,
    tokenId
  );

  return (
    <div
      className={styles.card}
      style={{ width: "100%", paddingBottom: "16px" }}
    >
      <ThirdwebNftMedia metadata={nftData?.metadata!} />
      <div className={styles.cardText}>
        <h2 className={styles.gradientText1}>{nftData?.metadata.name}</h2>
        <p>Token ID#{nftData?.metadata.id}</p>
      </div>
      <Web3Button
        contractAddress={STAKING_CONTRACT_ADDRESS}
        action={(contract) => contract.call("withdraw", [[tokenId]])}
        style={{ width: "100%" }}
      >
        Unstake
      </Web3Button>
    </div>
  );
};

export default StakedNftCard;
