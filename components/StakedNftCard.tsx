import styles from "../styles/Home.module.css";

type NftProps = { tokenId: Number };

const StakedNftCard = ({ tokenId }: NftProps) => {
  return (
    <div
      className={styles.card}
      style={{ width: "100%", paddingBottom: "16px" }}
    >
      StakedNftCard
    </div>
  );
};

export default StakedNftCard;
