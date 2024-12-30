"use client";

import { DefaultSurveyScreenProps, ScreenType } from "@/src/types";

import { ScreenDescription } from "../ScreenDescription";
import { Button } from "../Button";
import styles from "./index.module.css";

type InfoScreenPrsop = DefaultSurveyScreenProps & {
  screenType: ScreenType;
};

export const InfoScreen = ({
  title,
  statement,
  options,
  handleButtonClick,
  screenType,
}: InfoScreenPrsop) => (
  <>
    <div className={styles.infoBackground} />
    <ScreenDescription
      title={title}
      statement={statement}
      screenType={screenType}
    />
    <Button
      onClick={() => handleButtonClick(options[0])}
      screenType={screenType}
    >
      <span>{options[0].label}</span>
    </Button>
  </>
);
