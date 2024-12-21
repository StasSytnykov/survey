"use client";

import { ReactNode } from "react";
import styles from "./index.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.actionButton} onClick={onClick}>
      {children}
    </button>
  );
};
