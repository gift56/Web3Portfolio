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
        <div className={styles.heroContainer}>
          <MediaRenderer
            src={props.image}
            width="50%"
            height="auto"
            className={styles.heroImageContainer}
          />
          <div className={styles.heroCardContent}>
            <h1 className={styles.gradientText1}>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroCard;
