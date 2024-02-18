import {
  useContract,
  useContractMetadata,
  useTokenSupply,
} from "@thirdweb-dev/react";
import { HeroCard } from "../../components";
import styles from "../../styles/Home.module.css";
import { ERC20_CONTRACT_ADDRESS } from "../../constants/addresses";

const ERC20ProjectPage = () => {
  const { contract } = useContract(ERC20_CONTRACT_ADDRESS, "token");
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: tokenBalance, isLoading: tokenBalanceLoading } =
    useTokenSupply(contract);

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
          <h3>Token Stats</h3>
          {tokenBalanceLoading ? (
            "Loading Supply..."
          ) : (
            <p className="">
              Total Supply : {tokenBalance?.displayValue} {tokenBalance?.symbol}
            </p>
          )}
        </div>
        <div className={styles.stakeSection}>
          <h3>Token Balance</h3>
        </div>
        <div className={styles.stakeSection}>
          <h3>Earn Tokens</h3>
        </div>
      </div>
    </div>
  );
};

export default ERC20ProjectPage;
