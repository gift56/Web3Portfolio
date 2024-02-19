import { NFT } from "@thirdweb-dev/sdk";
import styles from "../styles/Home.module.css";
import {
  ThirdwebNftMedia,
  Web3Button,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import {
  ERC721_CONTRACT_ADDRESS,
  STAKING_CONTRACT_ADDRESS,
} from "../constants/addresses";

type NFTProps = {
  nft: NFT;
};

const StakeNftCard = ({ nft }: NFTProps) => {
  const address = useAddress();
  const { contract: ERC721Contract } = useContract(
    ERC721_CONTRACT_ADDRESS,
    "nft-drop"
  );

  const { contract: StakingContract } = useContract(STAKING_CONTRACT_ADDRESS);

  async function stakeNft(nftId: number[]) {
    if (!address) return;

    const isApproved = await ERC721Contract?.isApproved(
      address,
      STAKING_CONTRACT_ADDRESS
    );

    if (!isApproved) {
      await ERC721Contract?.setApprovalForAll(STAKING_CONTRACT_ADDRESS, true);
    }
    await StakingContract?.call("stake", [nftId]);
  }

  return (
    <div className={styles.card}>
      <ThirdwebNftMedia metadata={nft.metadata} />
      <div className={styles.cardText}>
        <h2 className={styles.gradientText1}>{nft.metadata.name}</h2>
        <p>Token ID#{nft.metadata.id}</p>
      </div>
      <Web3Button
        contractAddress={STAKING_CONTRACT_ADDRESS}
        action={() => stakeNft([parseInt(nft.metadata.id)])}
        style={{ width: "100%", margin: "0" }}
      >
        Stake
      </Web3Button>
    </div>
  );
};

export default StakeNftCard;
