"use client";

import { QuestionData } from "@/src/types";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

interface SurveyScreenProps {
  questionData: QuestionData;
}

export const SurveyScreen = ({ questionData }: SurveyScreenProps) => {
  const router = useRouter();

  const handleClick = (nextQuestion: string | null) => {
    if (nextQuestion === null) {
      return router.push("/results");
    }

    router.push(nextQuestion);
  };

  return (
    <div>
      {questionData.question}
      {questionData.options.map((option) => (
        <Button key={option.label} onClick={() => handleClick(option.next)}>
          {option.label}
        </Button>
      ))}
    </div>
  );
};
