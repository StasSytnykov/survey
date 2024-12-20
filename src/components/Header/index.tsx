import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.webp";
import chevron from "../../../public/images/chevron.webp";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        <Image src={chevron} height={24} width={24} alt="Chervon icon" />
      </Link>
      <Link href="/" className={styles.link}>
        <Image src={logo} height={24} width={24} alt="Nebula logo" />
      </Link>
    </nav>
  );
};
