import { useRouter } from "next/navigation";

import { useAppDispatch } from "../lib/hooks";
import { setAnswers } from "../lib/surveySlice/surveySlice";
import { Option } from "../types";

interface UseClickButtonProps {
  question: string;
}

export const useClickButton = ({ question }: UseClickButtonProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleButtonClick = ({ label, next }: Option) => {
    if (next === null) {
      return router.push("/results");
    }

    dispatch(setAnswers({ question, result: label }));
    router.push(next);
  };

  return { handleButtonClick };
};
