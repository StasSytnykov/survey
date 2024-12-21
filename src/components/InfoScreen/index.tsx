"use client";

import { ScreenData } from "@/src/types";
import { useClickButton } from "@/src/hooks/useClickButton";

import { Button } from "../Button";
import styles from "./index.module.css";

interface ScreenProps {
  screenData: ScreenData;
}

export const InfoScreen = ({ screenData }: ScreenProps) => {
  const { handleButtonClick } = useClickButton({
    question: screenData.question,
    id: screenData.id,
    screenType: screenData.screenType,
  });

  return (
    <section className={styles.infoScreen}>
      <div className={styles.infoBackground} />
      <h1 className={styles.infoTitle}>{screenData.question}</h1>
      {screenData.statement && (
        <p className={styles.infoText}>{screenData.statement}</p>
      )}
      <Button
        onClick={() => handleButtonClick(screenData.options[0])}
        screenType={screenData.screenType}
      >
        <span>{screenData.options[0].label}</span>
      </Button>
    </section>
  );
};
