interface Option {
  label: string;
  next: string;
}

export interface QuestionData {
  id: string;
  question: string;
  statement: string;
  screenType: string;
  questionType: string;
  options: Option[];
}
