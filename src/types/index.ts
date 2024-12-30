export interface Option {
  label: string;
  next: string | null;
}

export enum ScreenType {
  SINGLE = "singleChoice",
  INFO = "info",
  INPUT = "textInput",
}

export interface ScreenData {
  id: string;
  question: string;
  statement: string;
  screenType: ScreenType;
  options: Option[];
}

export interface DefaultSurveyScreenProps {
  title: string;
  options: Option[];
  statement?: string;
  handleButtonClick: ({ label, next }: Option) => void;
}
