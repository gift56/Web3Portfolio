import {
  ThirdwebNftMedia,
  Web3Button,
  useAddress,
  useClaimedNFTSupply,
  useContract,
  useContractMetadata,
  useOwnedNFTs,
  useTotalCount,
} from "@thirdweb-dev/react";
import { ERC721_CONTRACT_ADDRESS } from "../../constants/addresses";
import styles from "../../styles/Home.module.css";
import { HeroCard } from "../../components";
import Link from "next/link";

const ERC721ProjectPage = () => {
  const address = useAddress();

  const { contract } = useContract(ERC721_CONTRACT_ADDRESS, "nft-drop");
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: totalSupply, isLoading: isLoadingTotalSupply } =
    useTotalCount(contract);

  const { data: totalClaimedSupply, isLoading: isLoadingClaimedTotalSuppy } =
    useClaimedNFTSupply(contract);

  const { data: ownedNfts, isLoading: isLoadingOwnedNfts } = useOwnedNFTs(
    contract,
    address
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
          <h3>Claim ERC721</h3>
          <p>Claim an ERC721 NFT for FREE!.</p>
          <Web3Button
            contractAddress={ERC721_CONTRACT_ADDRESS}
            action={(contract) => contract.erc721.claim(1)}
            onSuccess={() => alert("NFT Claimed")}
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
      <div>
        <h2 className={styles.gradientText0} style={{ fontSize: "30px" }}>
          My NFTS:{" "}
        </h2>
        <div className={styles.grid}>
          {isLoadingOwnedNfts
            ? "Loading NFTS"
            : ownedNfts?.map((nft) => (
                <div key={nft.metadata.id} className={styles.card}>
                  <ThirdwebNftMedia metadata={nft.metadata} />
                  <div className={styles.cardText}>
                    <h2 className={styles.gradientText1}>
                      {nft.metadata.name}
                    </h2>
                    <Link href={`/project/staking`}>
                      <button
                        className={styles.matchButton}
                        style={{ width: "100%", margin: "0" }}
                      >
                        Stake NFT
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ERC721ProjectPage;
