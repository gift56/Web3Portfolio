import {
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
} from "@thirdweb-dev/react";
import {
  ERC20_CONTRACT_ADDRESS,
  ERC721_CONTRACT_ADDRESS,
  STAKING_CONTRACT_ADDRESS,
} from "../../constants/addresses";
import { HeroCard, StakeNftCard, StakedNftCard } from "../../components";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";

const StakingProjectPage = () => {
  const [claimableReward, setClaimableReward] = useState<BigNumber>();
  const address = useAddress();

  const { contract } = useContract(STAKING_CONTRACT_ADDRESS);
  const { data: ERC20Contract } = useContract(ERC20_CONTRACT_ADDRESS);
  const { data: ERC721Contract } = useContract(ERC721_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: tokenBalance, isLoading: isLoadingTokenBalance } =
    useTokenBalance(ERC20Contract, address);

  const { data: ownedERC721NFTS, isLoading: isLoadingOwnedERC721NFTS } =
    useOwnedNFTs(ERC721Contract, address);

  const { data: stakeERC721Tokens, isLoading: isLoadingStakeERC721Tokens } =
    useContractRead(contract, "getStakeInfo", [address]);

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
          <Web3Button
            contractAddress={STAKING_CONTRACT_ADDRESS}
            action={(contract) => contract.call("claimRewards")}
            onSuccess={() => {
              alert("Claimed Successfully");
              setClaimableReward(ethers.constants.Zero);
            }}
            isDisabled={!claimableReward || claimableReward.isZero()}
          >
            Claim Reward
          </Web3Button>
        </div>
        <div className={styles.stakeSection}>
          <h3>UnStaked</h3>
          {isLoadingOwnedERC721NFTS
            ? "Loading..."
            : ownedERC721NFTS && ownedERC721NFTS?.length > 0
            ? ownedERC721NFTS?.map((nft) => (
                <div key={nft.metadata.id} style={{ width: "100%" }}>
                  <StakeNftCard nft={nft} />
                </div>
              ))
            : "No NFTS Owned"}
        </div>
        <div className={styles.stakeSection}>
          <h3>Staked</h3>
          {isLoadingStakeERC721Tokens
            ? "Loading..."
            : stakeERC721Tokens && stakeERC721Tokens?.length > 0
            ? stakeERC721Tokens?.map((stakedNft: BigNumber, index: number) => (
                <div key={index} style={{ width: "100%" }}>
                  <StakedNftCard tokenId={stakedNft.toNumber()} />
                </div>
              ))
            : "No NFTS Staked"}
        </div>
      </div>
    </div>
  );
};

export default StakingProjectPage;
