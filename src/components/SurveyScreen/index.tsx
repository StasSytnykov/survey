"use client";

import { QuestionData } from "@/src/types";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

import styles from "./index.module.css";

interface SurveyScreenProps {
  questionData: QuestionData;
}

export const SurveyScreen = ({ questionData }: SurveyScreenProps) => {
  const router = useRouter();

  const handleClick = (nextQuestion: string | null) => {
    if (nextQuestion === null) {
      return router.push("/results");
    }

    router.push(nextQuestion);
  };

  return (
    <section className={styles.surveyScreen}>
      <h1 className={styles.question}>{questionData.question}</h1>
      {questionData.statement && (
        <p className={styles.questionStatement}>{questionData.statement}</p>
      )}
      <ul className={styles.answersList}>
        {questionData.options.map((option) => (
          <li key={option.label}>
            <Button onClick={() => handleClick(option.next)}>
              {option.label}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
