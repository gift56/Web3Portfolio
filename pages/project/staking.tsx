import {
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { STAKING_CONTRACT_ADDRESS } from "../../constants/addresses";
import { HeroCard } from "../../components";
import styles from "../../styles/Home.module.css";

const StakingProjectPage = () => {
  const address = useAddress();

  const { contract } = useContract(STAKING_CONTRACT_ADDRESS);
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
          <h3>Rewards</h3>
        </div>
        <div className={styles.stakeSection}>
          <h3>UnStaked</h3>
        </div>
        <div className={styles.stakeSection}>
          <h3>Staked</h3>
        </div>
      </div>
    </div>
  );
};

export default StakingProjectPage;
