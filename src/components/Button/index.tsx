"use client";

import { ReactNode } from "react";
import styles from "./index.module.css";
import { ScreenType } from "@/src/types";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  screenType?: ScreenType;
}

export const Button = ({ children, onClick, screenType }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      data-screen-type={screenType}
    >
      {children}
    </button>
  );
};
