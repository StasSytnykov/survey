"use client";

import { ScreenData, ScreenType } from "@/src/types";
import { useSaveScreenType } from "@/src/hooks/useSaveScreenType";
import { useClickButton } from "@/src/hooks/useClickButton";
import { useInterpolateQuestion } from "@/src/hooks/useInterpolateQuestion";

import { SingleChoiceScreen } from "../SingleChoiceScreen";
import { InfoScreen } from "../InfoScreen";
import { TextInputScreen } from "../TextInputScreen";
import styles from "./index.module.css";

interface SurveyScreenProps {
  screenData: ScreenData;
}

export const SurveyScreen = ({ screenData }: SurveyScreenProps) => {
  const { handleButtonClick } = useClickButton({
    question: screenData.question,
    id: screenData.id,
    screenType: screenData.screenType,
  });
  const { interpolatedQuestion } = useInterpolateQuestion(screenData.question);
  useSaveScreenType(screenData.screenType);

  const renderScreen = () => {
    switch (screenData.screenType) {
      case ScreenType.SINGLE:
        return (
          <SingleChoiceScreen
            handleButtonClick={handleButtonClick}
            title={interpolatedQuestion}
            statement={screenData.statement}
            options={screenData.options}
          />
        );
      case ScreenType.INPUT:
        return (
          <TextInputScreen
            handleButtonClick={handleButtonClick}
            title={interpolatedQuestion}
            statement={screenData.statement}
            options={screenData.options}
          />
        );
      case ScreenType.INFO:
        return (
          <InfoScreen
            handleButtonClick={handleButtonClick}
            title={interpolatedQuestion}
            statement={screenData.statement}
            options={screenData.options}
            screenType={screenData.screenType}
          />
        );
      default:
        return <h1>Unknown screen type</h1>;
    }
  };

  return <section className={styles.surveyScreen}>{renderScreen()}</section>;
};
