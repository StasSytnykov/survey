export interface Option {
  label: string;
  next: string | null;
}

export interface QuestionData {
  id: string;
  question: string;
  statement: string;
  screenType: string;
  questionType: string;
  options: Option[];
}
