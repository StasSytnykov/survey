"use client";

import { DefaultSurveyScreenProps } from "@/src/types";

import { ScreenDescription } from "../ScreenDescription";
import { Button } from "../Button";
import styles from "./index.module.css";

export const SingleChoiceScreen = ({
  title,
  options,
  statement,
  handleButtonClick,
}: DefaultSurveyScreenProps) => (
  <>
    <ScreenDescription title={title} statement={statement} />
    <ul className={styles.answersList}>
      {options.map((option) => (
        <li key={option.label}>
          <Button onClick={() => handleButtonClick(option)}>
            <span>{option.label}</span>
          </Button>
        </li>
      ))}
    </ul>
  </>
);
