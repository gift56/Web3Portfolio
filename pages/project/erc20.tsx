import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractMetadata,
  useTokenBalance,
  useTokenSupply,
} from "@thirdweb-dev/react";
import { HeroCard } from "../../components";
import styles from "../../styles/Home.module.css";
import { ERC20_CONTRACT_ADDRESS } from "../../constants/addresses";

const ERC20ProjectPage = () => {
  const address = useAddress();

  const { contract } = useContract(ERC20_CONTRACT_ADDRESS, "token");
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: tokenSupply, isLoading: tokenSupplyLoading } =
    useTokenSupply(contract);

  const {
    data: tokenBalance,
    isLoading: tokenBalanceLoading,
    error: tokenBalnceError,
  } = useTokenBalance(contract, address);

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
          {tokenSupplyLoading ? (
            "Loading Supply..."
          ) : (
            <p>
              Total Supply : {tokenSupply?.displayValue} {tokenSupply?.symbol}
            </p>
          )}
        </div>
        <div className={styles.stakeSection}>
          <h3>Token Balance</h3>
          {!address ? (
            <div>
              <h3>No Wallet Connected!</h3>
              <ConnectWallet />
            </div>
          ) : tokenBalanceLoading ? (
            "Loading Balance..."
          ) : (
            <p>
              Balance : {tokenBalance?.displayValue} {tokenBalance?.symbol}
            </p>
          )}
        </div>
        <div className={styles.stakeSection}>
          <h3>Earn Tokens</h3>
        </div>
      </div>
    </div>
  );
};

export default ERC20ProjectPage;
