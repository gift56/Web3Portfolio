import { useAddress, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { STAKING_CONTRACT_ADDRESS } from "../../constants/addresses";

const StakingProjectPage = () => {
  const address = useAddress();

  const { contract } = useContract(STAKING_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  return <div>StakingProjectPage</div>;
};

export default StakingProjectPage;
