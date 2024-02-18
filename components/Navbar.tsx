import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Link href="/">
        <p
          className={styles.gradientText1}
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          Web3Portfolio
        </p>
      </Link>
      <ConnectWallet />
    </nav>
  );
};

export default Navbar;
