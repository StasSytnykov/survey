"use client";

import { useAppSelector } from "@/src/lib/hooks";
import styles from "./index.module.css";

export const ResultScreen = () => {
  const { answers } = useAppSelector((state) => state.answers);

  return (
    <section className={styles.resultSection}>
      <h1 className={styles.resultTitle}>Your Results</h1>
      <ol className={styles.resultList}>
        {answers.map((answer) => (
          <li key={answer.question} className={styles.resultItem}>
            <h2>{answer.question}</h2>

            <p>{answer.answer}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
