import { useContract, useContractMetadata } from "@thirdweb-dev/react";
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
    </div>
  );
};

export default ERC1155ProjectPage;
