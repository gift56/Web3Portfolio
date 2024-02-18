import { useContract } from "@thirdweb-dev/react";
import { HeroCard } from "../../components";
import styles from "../../styles/Home.module.css";
import { ERC20_CONTRACT_ADDRESS } from "../../constants/addresses";

const ERC20ProjectPage = () => {
  const { contract } = useContract(ERC20_CONTRACT_ADDRESS, "token");

  return (
    <div className={styles.container}>
      <HeroCard isLoading={} title={} description={} image={} />
    </div>
  );
};

export default ERC20ProjectPage;
