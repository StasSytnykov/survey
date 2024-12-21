import { ScreenData, ScreenType } from "@/src/types";
import { SingleChoiceScreen } from "../SingleChoiceScreen";
import { InfoScreen } from "../InfoScreen";

interface SurveyScreenProps {
  screenData: ScreenData;
}

export const SurveyScreen = ({ screenData }: SurveyScreenProps) => {
  switch (screenData.screenType) {
    case ScreenType.SINGLE:
      return <SingleChoiceScreen screenData={screenData} />;
    // case ScreenType.INPUT:
    //   return <TextInputScreen screenData={screenData} />;
    case ScreenType.INFO:
      return <InfoScreen screenData={screenData} />;
    default:
      return (
        <section>
          <h1>Unknown screen type</h1>
        </section>
      );
  }
};
