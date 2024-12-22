"use client";

import { useAppSelector } from "@/src/lib/hooks";
import { usePlaceholders } from "@/src/hooks/usePlaceholders";
import { interpolateText } from "@/src/utils/interpolateText";

import styles from "./index.module.css";

export const ResultScreen = () => {
  const answers = useAppSelector((state) => state.survey.answers);
  const placeholders = usePlaceholders();

  return (
    <section className={styles.resultSection}>
      <h1 className={styles.resultTitle}>Your Results</h1>
      <ol className={styles.resultList}>
        {answers.map((answer) => (
          <li key={answer.question} className={styles.resultItem}>
            <h2>{interpolateText(answer.question, placeholders)}</h2>
            <p>{answer.result}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
