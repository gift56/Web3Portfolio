import { useContract, useContractMetadata } from "@thirdweb-dev/react";
import { ERC721_CONTRACT_ADDRESS } from "../../constants/addresses";
import styles from "../../styles/Home.module.css";
import { HeroCard } from "../../components";

const ERC721ProjectPage = () => {
  const { contract } = useContract(ERC721_CONTRACT_ADDRESS, "nft-drop");
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  return (
    <div className={styles.container}>
      <HeroCard
        isLoading={isLoading}
        title={contractMetadata?.name!}
        description={contractMetadata?.description!}
        image={contractMetadata?.image!}
      />

      <div className={styles.grid}>
        <div className={styles.stakeSection}>
          <h3>Claim ERC721</h3>
        </div>
        <div className={styles.stakeSection}>
          <h3>Contract Stats</h3>
        </div>
        <div className={styles.stakeSection}>
          <h3>Your NFTS</h3>
        </div>
      </div>
    </div>
  );
};

export default ERC721ProjectPage;
