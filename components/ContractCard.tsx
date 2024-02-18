import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";

type ContractCardProp = {
  href: string;
  contractAddress: string;
  title: string;
  description: string;
};

const ContractCard = (props: ContractCardProp) => {
  const { contract } = useContract(props.contractAddress);

  const { data: contractMetadata, isLoading } = useContractMetadata(contract);

  return (
    <Link href={props.href} className={styles.card}>
      <div className={styles.cardText}>
        <h2 className={styles.gradientText1}>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default ContractCard;
