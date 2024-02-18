import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <p
          className={styles.gradientText1}
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          Web3Portfolio
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
