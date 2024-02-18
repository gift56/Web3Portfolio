import styles from "../../styles/Home.module.css";
import { HeroCard } from "../../components";
import { PROFILE_STATUS_CONTRACT_ADDRESS } from "../../constants/addresses";
import {
  useAddress,
  useContract,
  useContractMetadata,
  useContractRead,
} from "@thirdweb-dev/react";

const ProfileStatusPage = () => {
  const address = useAddress();
  const { contract } = useContract(PROFILE_STATUS_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: currentStatus, isLoading: isLoadingCurrentStatus } =
    useContractRead(contract, "getStatus", [address]);

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
          <h3>Current Status</h3>
          <p>Tips in MATIC and record it on the blockchain.</p>
        </div>
        <div className={styles.stakeSection}>
          <h3>Update Status</h3>
        </div>
        <div className={styles.stakeSection}>
          <h3>Status Exist</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatusPage;
