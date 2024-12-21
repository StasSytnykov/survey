"use client";

import { useState } from "react";

import { ScreenData } from "@/src/types";
import { useClickButton } from "@/src/hooks/useClickButton";
import { useInterpolateQuestion } from "@/src/hooks/useInterpolateQuestion";

import { TextInput } from "../TextInput";
import { Button } from "../Button";
import styles from "./index.module.css";

interface SurveyScreenProps {
  screenData: ScreenData;
}

export const TextInputScreen = ({ screenData }: SurveyScreenProps) => {
  const [inputValue, setInputValue] = useState<string>("");
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
      <TextInput
        value={inputValue}
        onChange={setInputValue}
        placeholder="Enter your answer here..."
      />
      <Button
        onClick={() =>
          handleButtonClick({
            label: inputValue,
            next: screenData.options[0].next,
          })
        }
        screenType={screenData.screenType}
      >
        <span>Next</span>
      </Button>
    </section>
  );
};
