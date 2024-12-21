"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { resetAnswers } from "@/src/lib/surveySlice/surveySlice";
import { ScreenType } from "@/src/types";

import logo from "../../../public/images/logo.webp";
import logoWhite from "../../../public/images/logo-white.webp";
import chevron from "../../../public/images/chevron.webp";
import chevronWhite from "../../../public/images/chevron-white.webp";
import styles from "./index.module.css";

export const Header = () => {
  const storedScreenType = useAppSelector((state) => state.survey.screenType);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      dispatch(resetAnswers());
      router.push("/");
    }
  };

  return (
    <nav className={styles.nav}>
      {pathname.includes("survey") ? (
        <span onClick={handleBack} className={styles.link}>
          <Image
            src={storedScreenType === ScreenType.INFO ? chevronWhite : chevron}
            height={24}
            width={24}
            alt="Chervon icon"
          />
        </span>
      ) : (
        <span />
      )}
      <Link
        onClick={() => dispatch(resetAnswers())}
        href="/"
        className={styles.link}
      >
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
