"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.webp";
import logoWhite from "../../../public/images/logo-white.webp";
import chevron from "../../../public/images/chevron.webp";
import chevronWhite from "../../../public/images/chevron-white.webp";
import styles from "./index.module.css";
import { useAppSelector } from "@/src/lib/hooks";
import { ScreenType } from "@/src/types";

export const Header = () => {
  const storedScreenType = useAppSelector((state) => state.survey.screenType);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        <Image
          src={storedScreenType === ScreenType.INFO ? chevronWhite : chevron}
          height={24}
          width={24}
          alt="Chervon icon"
        />
      </Link>
      <Link href="/" className={styles.link}>
        <Image
          src={storedScreenType === ScreenType.INFO ? logoWhite : logo}
          height={24}
          width={24}
          alt="Nebula logo"
        />
      </Link>
    </nav>
  );
};
