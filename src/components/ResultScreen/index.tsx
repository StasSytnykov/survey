"use client";

import { useAppSelector } from "@/src/lib/hooks";
import { interpolateText } from "@/src/utils/interpolateText";

import styles from "./index.module.css";

export const ResultScreen = () => {
  const answers = useAppSelector((state) => state.survey.answers);
  const gender = useAppSelector((state) => state.survey.gender);
  const parentStatus = useAppSelector((state) => state.survey.parentStatus);

  const placeholders = {
    gender: gender,
    "who have children": parentStatus ? "who have children" : "",
  };

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
