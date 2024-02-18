import styles from "../../styles/Home.module.css";
import { HeroCard } from "../../components";
import { PROFILE_STATUS_CONTRACT_ADDRESS } from "../../constants/addresses";
import {
  useAddress,
  useContract,
  useContractMetadata,
  useContractRead,
} from "@thirdweb-dev/react";
import { useState } from "react";

const ProfileStatusPage = () => {
  const address = useAddress();
  const { contract } = useContract(PROFILE_STATUS_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: currentStatus, isLoading: isLoadingCurrentStatus } =
    useContractRead(contract, "getStatus", [address]);

  const { data: profileStatus, isLoading: isLoadingProfileStatus } =
    useContractRead(contract, "userStatus", [address]);

  const [status, setStatus] = useState("");

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
          {isLoadingCurrentStatus ? (
            "Loading..."
          ) : profileStatus.exists ? (
            profileStatus.message
          ) : (
            <i>"No Status Created Yet"</i>
          )}
        </div>
        <div className={styles.stakeSection}>
          <h3>Update Status</h3>
          <input type="text" value={status} onChange={(e) => e.target.value} style={{width:"100%", height:"2rem", margin}}/>
        </div>
        <div className={styles.stakeSection}>
          <h3>Status Exist</h3>
          {isLoadingProfileStatus
            ? "Loading..."
            : profileStatus.exists
            ? "True"
            : "False"}
        </div>
      </div>
    </div>
  );
};

export default ProfileStatusPage;
