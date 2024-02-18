import styles from "../../styles/Home.module.css";
import { HeroCard } from "../../components";
import { TIP_JAR_CONTRACT_ADDRESS } from "../../constants/addresses";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";

const TipJarProjectPage = () => {
  const { contract } = useContract(TIP_JAR_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  return (
    <div className={styles.container}>
      <HeroCard
        isLoading={isLoading}
        title={contractMetadata?.name!}
        description={contractMetadata?.description!}
        image={contractMetadata?.image!}
      />
    </div>
  );
};

export default TipJarProjectPage;
