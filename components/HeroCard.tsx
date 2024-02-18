import { MediaRenderer } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

type HeroCardProps = {
  isLoading: boolean;
  title: string;
  description: string;
  image: string;
};

const HeroCard = (props: HeroCardProps) => {
  return (
    <>
      {props.isLoading ? (
        <div className={styles.loadingText}>Loading... </div>
      ) : (
        <div className={styles.heroCardContainer}>
          <MediaRenderer src={props.image} width="100%" height="auto" className={styles.heroCardContentImage} />
        </div>
      )}
    </>
  );
};

export default HeroCard;
