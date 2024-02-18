import { useContract, useContractMetadata } from "@thirdweb-dev/react";
import React from "react";
import { ERC1155_CONTRACT_ADDRESS } from "../../constants/addresses";

const ERC1155ProjectPage = () => {
  const { contract } = useContract(ERC1155_CONTRACT_ADDRESS, "edition-drop");
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  return <div>ERC1155ProjectPage</div>;
};

export default ERC1155ProjectPage;
