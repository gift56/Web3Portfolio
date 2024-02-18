import { Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import React from "react";
import { ERC1155_CONTRACT_ADDRESS } from "../../constants/addresses";
import { HeroCard } from "../../components";
import styles from "../../styles/Home.module.css";

const ERC1155ProjectPage = () => {
  const { contract } = useContract(ERC1155_CONTRACT_ADDRESS, "edition-drop");
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
          <h3>Claim ERC1155</h3>
          <p>Claim an ERC1155 NFT for 10 ERC20 tokens.</p>
          <Web3Button
            contractAddress={ERC1155_CONTRACT_ADDRESS}
            // action={(contract) => contract.erc1155.claim(1)}
            
          >
            Claim NFT
          </Web3Button>
        </div>
        <div className={styles.stakeSection}>
          <h3>Contract Stats</h3>
          <p>
            Total Supply:
            {isLoadingTotalSupply
              ? "Loading Total Supply..."
              : ` ${totalSupply?.toNumber()}`}
          </p>
          <p>
            Total Claim:
            {isLoadingClaimedTotalSuppy
              ? "Loading Total Claimed..."
              : ` ${totalClaimedSupply?.toNumber()}`}
          </p>
        </div>
        <div className={styles.stakeSection}>
          <h3>Your NFTS</h3>
          <p>
            Total Owned:{" "}
            {isLoadingOwnedNfts
              ? "Loading Owned Nfts..."
              : ` ${ownedNfts?.length}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ERC1155ProjectPage;
