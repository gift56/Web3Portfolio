import {
  useAddress,
  useContract,
  useContractMetadata,
  useTokenBalance,
} from "@thirdweb-dev/react";
import {
  ERC20_CONTRACT_ADDRESS,
  STAKING_CONTRACT_ADDRESS,
} from "../../constants/addresses";
import { HeroCard } from "../../components";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";

const StakingProjectPage = () => {
  const [claimableReward, setClaimableReward] = useState<BigNumber>();
  const address = useAddress();

  const { contract } = useContract(STAKING_CONTRACT_ADDRESS);
  const { data: ERC20Contract } = useContract(ERC20_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: tokenBalance, isLoading: isLoadingTokenBalance } =
    useTokenBalance(ERC20Contract, address);

  useEffect(() => {
    if (!contract || !address) return;

    async function getClaimableReward() {
      const claimableRewards = await contract?.call("getStakeInfo", [address]);

      setClaimableReward(claimableRewards[1]);
    }
    getClaimableReward();
  }, [address, contract]);

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
          {isLoadingTokenBalance ? (
            "Loading Balance..."
          ) : (
            <p>
              Balance: {tokenBalance?.displayValue} {tokenBalance?.symbol}
            </p>
          )}
          {claimableReward && (
            <p>Reward Balance: {ethers.utils.formatEther(claimableReward)}</p>
          )}
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
