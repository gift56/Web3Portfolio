import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
  useTokenBalance,
  useTokenSupply,
} from "@thirdweb-dev/react";
import { HeroCard } from "../../components";
import styles from "../../styles/Home.module.css";
import { ERC20_CONTRACT_ADDRESS } from "../../constants/addresses";
import Link from "next/link";

const ERC20ProjectPage = () => {
  const address = useAddress();

  const { contract } = useContract(ERC20_CONTRACT_ADDRESS, "token");
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  const { data: tokenSupply, isLoading: tokenSupplyLoading } =
    useTokenSupply(contract);

  const { data: tokenBalance, isLoading: tokenBalanceLoading } =
    useTokenBalance(contract, address);

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
            <div className={styles.loadingText}>Loading... </div>
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
            <div className={styles.loadingText}>Loading... </div>
          ) : (
            <>
              <p>
                Balance : {tokenBalance?.displayValue} {tokenBalance?.symbol}
              </p>
              <Web3Button
                contractAddress={ERC20_CONTRACT_ADDRESS}
                action={(contract) => contract.erc20.burn(10)}
              >
                Burn 10 Token
              </Web3Button>
            </>
          )}
        </div>
        <div className={styles.stakeSection}>
          <h3>Earn Tokens</h3>

          <p>Earn more token by staking an ERC721 NFT.</p>
          <div>
            <Link href="/project/erc721">
              <button className={styles.matchButton}>Stake ERC721</button>
            </Link>
            <Link href="/project/erc721">
              <button className={styles.matchButton}>Claim ERC721</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERC20ProjectPage;
