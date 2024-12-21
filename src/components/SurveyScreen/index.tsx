"use client";

import { QuestionData } from "@/src/types";
import { useClickButton } from "@/src/hooks/useClickButton";

import styles from "./index.module.css";
import { Button } from "../Button";

interface SurveyScreenProps {
  questionData: QuestionData;
}

export const SurveyScreen = ({ questionData }: SurveyScreenProps) => {
  const { handleButtonClick } = useClickButton({
    question: questionData.question,
  });

  return (
    <section className={styles.surveyScreen}>
      <h1 className={styles.question}>{questionData.question}</h1>
      {questionData.statement && (
        <p className={styles.questionStatement}>{questionData.statement}</p>
      )}
      <ul className={styles.answersList}>
        {questionData.options.map((option) => (
          <li key={option.label}>
            <Button onClick={() => handleButtonClick(option)}>
              <span>{option.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
