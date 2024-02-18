import styles from "../../styles/Home.module.css";
import { HeroCard } from "../../components";
import { PROFILE_STATUS_CONTRACT_ADDRESS } from "../../constants/addresses";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";

const ProfileStatusPage = () => {
  const { contract } = useContract(PROFILE_STATUS_CONTRACT_ADDRESS);
  const { data: contractMetadata, isLoading } = useContractMetadata(contract);
  return <div>ProfileStatusPage</div>;
};

export default ProfileStatusPage;
