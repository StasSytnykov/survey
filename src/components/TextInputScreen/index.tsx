"use client";

import { ScreenData } from "@/src/types";
import { useClickButton } from "@/src/hooks/useClickButton";
import { useInterpolateQuestion } from "@/src/hooks/useInterpolateQuestion";

import { Button } from "../Button";
import styles from "./index.module.css";

interface SurveyScreenProps {
  screenData: ScreenData;
}

export const TextInputScreem = ({ screenData }: SurveyScreenProps) => {
  const { handleButtonClick } = useClickButton({
    question: screenData.question,
    id: screenData.id,
    screenType: screenData.screenType,
  });

  const { interpolatedQuestion } = useInterpolateQuestion(screenData.question);

  return (
    <section className={styles.surveyScreen}>
      <div className={styles.dynamicBackground} />
      <h1 className={styles.question}>{interpolatedQuestion}</h1>
      {screenData.statement && (
        <p className={styles.questionStatement}>{screenData.statement}</p>
      )}
      <ul className={styles.answersList}>
        {screenData.options.map((option) => (
          <li key={option.label}>
            <Button screenType={screenData.screenType}>
              <span>{option.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
