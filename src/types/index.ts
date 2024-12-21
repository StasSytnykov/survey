export interface Option {
  label: string;
  next: string | null;
}

export enum ScreenType {
  SINGLE = "singleChoice",
  INFO = "info",
}

export interface QuestionData {
  id: string;
  question: string;
  statement: string;
  screenType: ScreenType;
  options: Option[];
}
