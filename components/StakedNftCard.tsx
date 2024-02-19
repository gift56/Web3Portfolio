import { useContract, useNFT } from "@thirdweb-dev/react";
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

  const { data: nftData } = useNFT(ERC721Contract, tokenId);

  return (
    <div
      className={styles.card}
      style={{ width: "100%", paddingBottom: "16px" }}
    >
      StakedNftCard
    </div>
  );
};

export default StakedNftCard;
