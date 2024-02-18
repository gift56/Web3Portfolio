import { ContractCard } from "../components";
import { ERC20_CONTRACT_ADDRESS } from "../constants/addresses";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            My{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/dashboard/contracts/deploy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contracts
              </a>
            </span>
          </h1>

          <p className={styles.description}>
            Select a contract to interact with.
          </p>
        </div>

        <div className={styles.grid}>
          <ContractCard
            href="/"
            contractAddress={ERC20_CONTRACT_ADDRESS}
            title="ERC20 →"
            description="A standard interface for tokens."
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
