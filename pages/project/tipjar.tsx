import styles from "../../styles/Home.module.css";
import { HeroCard } from "../../components";
import { TIP_JAR_CONTRACT_ADDRESS } from "../../constants/addresses";
import {
  Web3Button,
  useContract,
  useContractMetadata,
  useContractRead,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const TipJarProjectPage = () => {
  const { contract } = useContract(TIP_JAR_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: tipBalance, isLoading: isLoadingTipBalance } = useContractRead(
    contract,
    "getBalance"
  );

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
          <h3>Leave a tip</h3>
          <p>Tips in MATIC and record it on the blockchain.</p>
          <Web3Button
            contractAddress={TIP_JAR_CONTRACT_ADDRESS}
            action={(contract) =>
              contract.call("tip", [], { value: "1000000000000000" })
            }
            onSuccess={() => alert("Tip Received")}
          >
            {`Tip (0.001 MATIC)`}
          </Web3Button>
        </div>
        <div className={styles.stakeSection}>
          <h3>Tip Jar balance</h3>
          <p>
            Total Tips:
            {isLoadingTipBalance
              ? "Loading Total Supply..."
              : ` ${ethers.utils.formatEther(tipBalance)} MATIC`}
          </p>
        </div>
        <div className={styles.stakeSection}>
          <h3>Withdrawn balance</h3>
        </div>
      </div>
    </div>
  );
};

export default TipJarProjectPage;
