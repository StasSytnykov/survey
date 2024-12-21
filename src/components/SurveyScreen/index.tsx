"use client";

import { QuestionData } from "@/src/types";
import { useClickButton } from "@/src/hooks/useClickButton";

import styles from "./index.module.css";
import { Button } from "../Button";
import { useScreenType } from "@/src/hooks/useScreenType";

interface SurveyScreenProps {
  questionData: QuestionData;
}

export const SurveyScreen = ({ questionData }: SurveyScreenProps) => {
  const { handleButtonClick } = useClickButton({
    question: questionData.question,
      id: questionData.id,
    screenType: questionData.screenType,
  });
  const { storedScreenType } = useScreenType({
    screenType: questionData.screenType,
  });

  return (
    <section className={styles.surveyScreen}>
      <div
        className={styles.dynamicBackground}
        data-screen-type={storedScreenType}
      />
      <h1 className={styles.question} data-screen-type={storedScreenType}>
        {questionData.question}
      </h1>
      {questionData.statement && (
        <p
          className={styles.questionStatement}
          data-screen-type={storedScreenType}
        >
          {questionData.statement}
        </p>
      )}
      <ul className={styles.answersList}>
        {questionData.options.map((option) => (
          <li key={option.label}>
            <Button
              onClick={() => handleButtonClick(option)}
              screenType={storedScreenType}
            >
              <span>{option.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
